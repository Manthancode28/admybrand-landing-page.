import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { MOCK_DATA } from '../data/mockData';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white scroll-animate">Find the Perfect Plan</h2>
          <p className="mt-4 text-lg text-gray-400 scroll-animate">
            Start for free, then upgrade as you grow. No hidden fees. No long-term contracts.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-start">
          {MOCK_DATA.pricing.map((plan, index) => (
            <div key={index} className={`scroll-animate ${plan.popular ? 'lg:scale-105' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
              <Card className={`h-full flex flex-col ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-gray-400">{plan.description}</p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Icon name="CheckCircle" className="h-6 w-6 text-green-400 flex-shrink-0 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button variant={plan.popular ? 'primary' : 'outline'} size="lg" className="w-full">
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;