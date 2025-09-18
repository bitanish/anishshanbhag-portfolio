import React from "react";

const projectsData = [
  {
    id: 1,
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
    title: "AI Workflow Orchestrator (Multi-Agent LLM System)",
    description:
      "Implemented a multi-agent system using CrewAI and LangChain with role-specific agents (Researcher, Planner, Writer) collaborating via OpenAI GPT models. Integrated FastAPI backend and React dashboard for workflow execution, reducing manual research effort by 70%.",
    link: "#", 
    tags: ["React", "FastAPI", "AWS", "CrewAI", "LangChain", "OpenAI API"], 
  },
  {
    id: 2,
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
    title: "AI Knowledge Retrieval Platform (RAG)",
    description:
      "Built a full-stack RAG platform with document upload, text extraction, chunking, and semantic search via FAISS. Developed React frontend with JWT authentication, FastAPI backend for orchestration, and OpenAI embeddings for retrieval. Achieved sub-2s query latency on 10K+ documents, deployed on AWS with Docker",
    link: "#",
    tags: ["React", "FastAPI", "AWS", "RAG", "FAISS", "OpenAI API", "Docker"],
  },
];

const Projects = () => {
  return (
    <div className="text-lightest-slate">
      <h2 className="text-3xl font-bold mb-8 text-white font-display">Projects</h2>
      <div className="space-y-16"> 
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg overflow-hidden
                       transition-all duration-300 ease-in-out
                       hover:bg-light-navy hover:shadow-lg"
          >
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 p-4 lg:p-6">
              <div className="w-full lg:w-1/4 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-md object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/640x360/0a192f/ffffff?text=Image+Error"; }} // Fallback image
                />
              </div>

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