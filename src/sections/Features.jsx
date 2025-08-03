import React from 'react';
import Card from '../components/Card';
import Icon from '../components/Icon';
import { MOCK_DATA } from '../data/mockData';

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white scroll-animate">The Future of Marketing is Here</h2>
          <p className="mt-4 text-lg text-gray-400 scroll-animate">
            Our AI-powered suite provides everything you need to outsmart the competition and win your market.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_DATA.features.map((feature, index) => (
            <div key={index} className="scroll-animate" style={{animationDelay: `${index * 100}ms`}}>
              <Card>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 text-blue-400">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;