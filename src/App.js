import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import MouseSpotlight from "./components/MouseSpotlight";
import Footer from "./components/FooterCTA"; // Changed import from FooterCTA to Footer

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const mainContentScrollRef = useRef(null);

  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: mainContentScrollRef.current,
      rootMargin: "0px 0px -70% 0px", // Adjusted rootMargin: Trigger when top of section is 30% from top of viewport
      threshold: 0, // We want to observe any intersection
    };

    const observerCallback = (entries) => {
      let highestIntersectionRatioEntry = null;
      let highestIntersectionRatio = 0;
      let closestToTopEntry = null;
      let minTopDistance = Infinity;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Prioritize by intersection ratio first (how much of it is visible)
          if (entry.intersectionRatio > highestIntersectionRatio) {
            highestIntersectionRatio = entry.intersectionRatio;
            highestIntersectionRatioEntry = entry;
          }

          // Also keep track of the one whose top is closest to the root's top
          // This helps when multiple sections are partially visible
          const rect = entry.boundingClientRect;
          const rootRect = mainContentScrollRef.current.getBoundingClientRect();
          const topDistance = rect.top - rootRect.top;

          if (topDistance >= 0 && topDistance < minTopDistance) { // Only consider sections whose top is at or below the root's top
            minTopDistance = topDistance;
            closestToTopEntry = entry;
          }
        }
      });

      let newActiveSectionId = activeSection;

      // Logic to determine the single active section:
      // 1. If any section has a very high intersection ratio, prioritize it
      if (highestIntersectionRatioEntry && highestIntersectionRatioEntry.intersectionRatio > 0.7) { // More than 70% visible
        newActiveSectionId = highestIntersectionRatioEntry.target.id;
      }
      // 2. Otherwise, if there's a section whose top is closest to the scroll container's top and is visible
      else if (closestToTopEntry) {
        newActiveSectionId = closestToTopEntry.target.id;
      }
      // 3. Fallback: If nothing else, use the first section if it's visible at all
      else if (entries.length > 0 && entries[0].isIntersecting) {
        newActiveSectionId = entries[0].target.id;
      }

      if (newActiveSectionId && newActiveSectionId !== activeSection) {
        setActiveSection(newActiveSectionId);
      }
    };


    let observer;
    if (mainContentScrollRef.current) {
      observer = new IntersectionObserver(observerCallback, observerOptions);

      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    }

    return () => {
      if (observer) {
        Object.values(sectionRefs).forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
        observer.disconnect();
      }
    };
  }, [activeSection]); // Keep activeSection in dependency array

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && mainContentScrollRef.current) {
      const offset = 20; // You can adjust this value as needed
      const offsetTop = section.offsetTop - offset;
      mainContentScrollRef.current.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-[2fr_3fr] h-screen text-white bg-[#0a192f]">
      <MouseSpotlight />

      <aside className="py-16 px-8 flex flex-col justify-between lg:pl-24 lg:pr-8 lg:sticky top-0 h-screen">
        <Sidebar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </aside>

      <main
        ref={mainContentScrollRef}
        className="h-screen overflow-y-scroll scroll-smooth px-8 py-10 lg:py-20 flex flex-col items-center"
      >
        <div className="max-w-screen-md w-full">
          {/* Each section now has a responsive heading */}
          <section id="about" ref={sectionRefs.about} className="mt-16 lg:mt-0 pb-24">
            <About />
          </section>

          <section id="experience" ref={sectionRefs.experience} className="pb-24">
            <Experience />
          </section>

          <section id="projects" ref={sectionRefs.projects} className="pb-24">
            <Projects />
          </section>

          {/* Add the new FooterCTA component here */}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;