import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useContactStore } from './store/contactStore';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import AddContactModal from './components/AddContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchContacts, contacts } = useContactStore();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // Save to localStorage whenever contacts change
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('tria-contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Tria Contact List
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manage your contacts with ease
          </p>
        </motion.div>

        {/* Search and Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <div className="flex-1">
              <SearchBar />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="hidden xs:inline">Add Contact</span>
              <span className="xs:hidden">Add</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Contact List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ContactList />
        </motion.div>
      </div>

      {/* Add Contact Modal */}
      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;
