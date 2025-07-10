import React from "react";

const experiences = [
  // ... (your existing experience data) ...
  {
    year: "2023 — Present",
    title: "Senior Frontend Engineer, Accessibility · Klaviyo",
    description:
      "Build and maintain critical components used to construct Klaviyos frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tags: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    year: "2018 — 2023",
    title: "Lead Engineer · Upstatement",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    tags: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    year: "July — Dec 2017",
    title: "UI Engineer Co-op · Apple",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    tags: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
];

const Experience = () => {
  return (
    <div className="text-lightest-slate">
      <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group flex flex-col lg:flex-row gap-4 lg:gap-16 p-4 lg:p-6 rounded-lg
                       transition-all duration-300 ease-in-out
                       hover:bg-light-navy hover:shadow-lg"
          >
            <div className="w-full lg:w-1/4 text-grey-text text-sm mb-2 lg:mb-0">
              {exp.year}
            </div>

            <div className="w-full lg:w-3/4">
              <h3 className="text-lg font-semibold mb-1 text-lightest-slate group-hover:text-green-accent">
                {exp.title}
              </h3>
              <p className="text-grey-text mb-4 leading-relaxed text-[15px]">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#24344e] text-green-accent text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Resume button, now with controlled margin-top */}
      <div className="mt-16 text-center lg:text-left"> {/* mt-16 to separate from last experience card */}
        <a
          href="/anishshanbhag.pdf" // Adjust this path to your resume file in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-accent font-semibold text-sm
                     group transition-all duration-200 ease-in-out
                     hover:text-white"
        >
          View Full Resume
          <span className="ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

export default Experience;