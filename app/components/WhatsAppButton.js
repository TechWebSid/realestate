'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '+918887676039';
  const message = 'Hello! I would like to know more about your properties.';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        Chat with us
      </span>
    </button>
  );
} 