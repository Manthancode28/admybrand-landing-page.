import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Icon from '../components/Icon';
import { MOCK_DATA } from '../data/mockData';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % MOCK_DATA.testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white scroll-animate">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-gray-400 scroll-animate">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <div className="mt-16 relative max-w-3xl mx-auto h-80">
          {MOCK_DATA.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Card className="h-full flex flex-col justify-center items-center text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto" />
                <blockquote className="mt-6 text-lg text-white italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-3">
          {MOCK_DATA.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;