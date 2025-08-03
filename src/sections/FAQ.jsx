import React from 'react';
import FAQItem from '../components/FAQItem';
import { MOCK_DATA } from '../data/mockData';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white scroll-animate">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-400 scroll-animate">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          {MOCK_DATA.faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;