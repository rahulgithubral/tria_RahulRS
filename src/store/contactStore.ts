import { create } from 'zustand';
import { Contact, ContactFormData } from '../types/contact';
import { mockContacts } from '../data/mockContacts';

interface ContactStore {
  contacts: Contact[];
  filteredContacts: Contact[];
  isLoading: boolean;
  searchQuery: string;
  
  // Actions
  setContacts: (contacts: Contact[]) => void;
  addContact: (contact: ContactFormData) => void;
  setSearchQuery: (query: string) => void;
  filterContacts: () => void;
  fetchContacts: () => Promise<void>;
}

export const useContactStore = create<ContactStore>((set, get) => ({
  contacts: [],
  filteredContacts: [],
  isLoading: false,
  searchQuery: '',
  
  setContacts: (contacts) => set({ contacts: contacts.sort((a, b) => b.createdAt - a.createdAt), filteredContacts: contacts }),
  
  addContact: (contactData) => {
    const newContact: Contact = {
      ...contactData,
      id: Date.now().toString(),
      createdAt: Date.now(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(contactData.name)}&background=3b82f6&color=ffffff&size=150`
    };
    
    const updatedContacts = [newContact, ...get().contacts];
    set({ contacts: updatedContacts });
    get().filterContacts();
  },
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterContacts();
  },
  
  filterContacts: () => {
    const { contacts, searchQuery } = get();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    set({ filteredContacts: filtered });
  },
  
  fetchContacts: async () => {
    set({ isLoading: true });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Load from localStorage if available, otherwise use mock data
    const savedContacts = localStorage.getItem('tria-contacts');
    const contacts = savedContacts ? JSON.parse(savedContacts) : mockContacts;
    
    set({ 
      contacts, 
      filteredContacts: contacts, 
      isLoading: false 
    });
  }
}));
