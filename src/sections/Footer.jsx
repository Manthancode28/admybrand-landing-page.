import React from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';

const Footer = ({ onContactClick }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center">
              <Icon name="trello" className="h-8 w-8 text-blue-500" />
              <span className="ml-3 text-2xl font-bold text-white">ADmyBRAND</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-xs">AI-powered marketing amplification for ambitious brands.</p>
            <Button onClick={onContactClick} className="mt-6">Contact Us</Button>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} ADmyBRAND, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Icon name="Twitter" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Icon name="Github" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Icon name="Linkedin" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;