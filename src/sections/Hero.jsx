import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Icon from '../components/Icon';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 text-white text-center overflow-hidden">
        {/* Background Gradient Blobs */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-600/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-600/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight animate-fade-in-up">
          Marketing, Amplified by <span className="text-blue-400">Artificial Intelligence</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 animate-fade-in-up animation-delay-300">
          Stop guessing. Start growing. ADmyBRAND AI Suite turns your data into your most powerful marketing asset, driving unparalleled growth and ROI.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Button variant="primary" size="lg">
            Start Your Free Trial
          </Button>
          <Button variant="secondary" size="lg">
            <Icon name="PlayCircle" className="mr-2 h-6 w-6" />
            Watch Demo
          </Button>
        </div>
        <div className="mt-16 animate-fade-in-up animation-delay-900">
            <Card className="max-w-4xl mx-auto p-4">
                <img 
                    src="/dashboard-screenshot.png" 
                    alt="AI Dashboard Preview" 
                    className="rounded-lg shadow-2xl"
                />
            </Card>
        </div>
      </div>
    </section>
  );
};
export default Hero;