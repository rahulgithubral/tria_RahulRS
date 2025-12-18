import React, { useState, useEffect } from 'react';
import { useContactStore } from '../store/contactStore';
import { debounce } from '../utils/debounce';

const SearchBar: React.FC = () => {
  const [localQuery, setLocalQuery] = useState('');
  const { setSearchQuery } = useContactStore();

  // Debounced search function
  const debouncedSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  useEffect(() => {
    debouncedSearch(localQuery);
  }, [localQuery, debouncedSearch]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search contacts by name..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        className="w-full pl-10 pr-4 h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;
