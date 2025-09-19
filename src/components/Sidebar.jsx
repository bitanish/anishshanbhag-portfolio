import React from "react";

const Sidebar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <div className="h-full bg-[#0a192f] text-white flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold leading-tight">Anish Shanbhag</h1>
        <h2 className="mt-2 text-lg font-semibold text-lightest-slate">
          Full Stack Engineer
        </h2>
        <p className="mt-4 text-md font-medium text-lightest-slate leading-snug">
          I build scalable, secure, and reliable full-stack web applications.
        </p>

        {/* ✅ Resume button under title */}
        <a
          href={`${process.env.PUBLIC_URL}/AnishShanbhag.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-4 py-2 text-sm font-semibold 
                     text-green-accent border border-green-accent rounded-md 
                     hover:bg-green-accent hover:text-white transition-all duration-200"
        >
          View Resume
        </a>

        {/* Navigation */}
        <nav className="hidden lg:block mt-12">
          <ul className="space-y-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`flex items-center group cursor-pointer transition-colors duration-200 ease-in-out ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-grey-text hover:text-green-accent"
                  }`}
                >
                  <div
                    className={`h-px mr-4 transition-all duration-200 ease-in-out ${
                      activeSection === item.id
                        ? "w-16 bg-green-accent"
                        : "w-8 bg-grey-text group-hover:w-16 group-hover:bg-green-accent"
                    }`}
                  ></div>
                  <span className={`${activeSection === item.id ? "font-bold" : ""}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4 text-sm text-grey-text mt-8 lg:mt-0">
        <nav className="hidden lg:flex space-x-4">
          <a href="https://github.com/bitanish" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/anishshanbhag/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>

        <div className="mt-4 lg:mt-0">
          <p className="flex items-center">
            <span className="mr-2 text-green-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <a href="mailto:anishshanbhag15@gmail.com" className="hover:text-white">
              anishshanbhag15@gmail.com
            </a>
          </p>
          <p className="flex items-center mt-2">
            <span className="mr-2 text-green-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <a href="tel:+918971575068" className="hover:text-white">
              +918971575068
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
