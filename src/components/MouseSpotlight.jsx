import React, { useEffect, useState } from 'react';

const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.body.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={gradientStyle}
    ></div>
  );
};

export default MouseSpotlight;