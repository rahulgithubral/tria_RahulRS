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
      className="bg-white p-6 rounded-3xl shadow-lg transition-all duration-200 hover:shadow-xl"
    >
      {/* GRID LAYOUT: Photo centered on top, details below */}
      <div className="flex flex-col items-center text-center">
        {/* Avatar at top center */}
        <div className="mb-4">
          {contact.avatar ? (
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-semibold text-2xl">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Contact details below */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {contact.name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">{contact.email}</p>
          <p className="text-sm text-gray-600">{contact.phone}</p>
        </div>

        {/* Status indicator */}
        <div className="mt-3">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
