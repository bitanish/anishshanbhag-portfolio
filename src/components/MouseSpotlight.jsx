// src/components/MouseSpotlight.jsx
import React, { useEffect, useState } from 'react';

const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get the bounding box of the whole window (or a specific parent if you want)
      const rect = document.body.getBoundingClientRect(); // Using body for full page
      setMousePosition({
        x: e.clientX - rect.left, // X position relative to the element
        y: e.clientY - rect.top,   // Y position relative to the element
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // You might want to adjust the size and opacity of the spotlight
  // based on whether the mouse is over the sidebar or the main content.
  // For simplicity, let's keep it uniform for now.
  // We can add more complex logic if needed later (e.g., passing refs for specific areas).

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    // You can adjust the rgba values and the size (600px) for desired effect
    // e.g., rgba(50, 200, 255, 0.1) for a subtle blue, or rgba(100, 255, 100, 0.1) for a subtle green
    // The 80% is the fade-out point
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={gradientStyle}
    ></div>
  );
};

export default MouseSpotlight;