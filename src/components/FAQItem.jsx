import React, { useState } from 'react';
import Icon from './Icon';

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border-b border-gray-700 py-6 scroll-animate">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
        <Icon name="ChevronDown" className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-300">{faq.answer}</p>
      </div>
    </div>
  );
};
export default FAQItem;