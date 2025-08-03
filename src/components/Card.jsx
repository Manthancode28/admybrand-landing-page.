import React from 'react';

const Card = ({ className, children }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:border-white/30 ${className}`}>
      {children}
    </div>
  );
};
export default Card;