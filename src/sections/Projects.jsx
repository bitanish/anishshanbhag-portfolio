import React from "react";

const projectsData = [
  {
    id: 1,
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
    title: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    link: "#", // Replace with actual project link
    tags: ["Node", "Express", "React", "Styled Components", "Spotify API"], // Example tags
  },
  {
    id: 2,
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
    title: "Another Spotify Connected App", // Changed title for distinction
    description:
      "This is a duplicated project entry to fulfill the request of having three items. It showcases similar technologies and concepts.",
    link: "#",
    tags: ["JavaScript", "APIs", "Web Development"],
  },
  {
    id: 3,
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
    title: "Third Project Example", // Changed title for distinction
    description:
      "A third example project, demonstrating the layout and styling. Focuses on front-end development and user interface design principles.",
    link: "#",
    tags: ["React", "Tailwind CSS", "UI/UX"],
  },
];

const Projects = () => {
  return (
    <div className="text-lightest-slate">
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
      <div className="space-y-16"> {/* Vertical spacing between project cards */}
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg overflow-hidden
                       transition-all duration-300 ease-in-out
                       hover:bg-light-navy hover:shadow-lg" // Card hover effects
          >
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 p-4 lg:p-6">
              {/* Image Section */}
              <div className="w-full lg:w-1/4 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-md object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/640x360/0a192f/ffffff?text=Image+Error"; }} // Fallback image
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/4">
                <h3 className="text-lg font-semibold mb-1 text-lightest-slate group-hover:text-green-accent">
                  {project.title}
                  <span className="ml-2 inline-block transition-transform duration-200 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1">
                  </span>
                </h3>
                <p className="text-grey-text mb-4 leading-relaxed text-[15px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;