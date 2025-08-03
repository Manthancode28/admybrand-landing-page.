import React, { useState } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Import Sections
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

// Import Components
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';

export default function App() {
  useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onContactClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Contact Our Team">
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}