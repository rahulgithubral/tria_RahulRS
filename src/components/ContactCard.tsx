import React from 'react';
import { Contact } from '../types/contact';
import { motion } from 'framer-motion';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
      className="card p-6 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {contact.avatar ? (
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {contact.name}
          </h3>
          <p className="text-sm text-gray-600 truncate">
            {contact.email}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {contact.phone}
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
