// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-2 text-center text-sm text-grey-text"> {/* Reduced vertical padding */}
      <p className="max-w-xl mx-auto leading-relaxed mb-2">
        Loosely designed in Figma and coded in Visual Studio Code by yours truly.
        Built with <span className="text-white">React</span> & <span className="text-white">Tailwind CSS</span>, deployed with <span className="text-white">Netlify</span>.
      </p>
      <p className="mt-1">&copy; {currentYear} Anish Shanbhag</p>
    </div>
  );
};

export default Footer;