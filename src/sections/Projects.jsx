import React from "react";

const projectsData = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/Project2.jpg`,
    title: "AI Workflow Orchestrator (Multi-Agent LLM System)",
    description:
      "Implemented a multi-agent system using CrewAI and LangChain with role-specific agents (Researcher, Planner, Writer) collaborating on OpenAI GPT models. Integrated a FastAPI backend and React dashboard for workflow execution, reducing manual research effort by 70%.",
    link: "https://github.com/bitanish/ai-workflow-orchestrator", 
    tags: ["React", "FastAPI", "AWS", "CrewAI", "LangChain", "OpenAI API"], 
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/Project1.jpg`,
    title: "AI Knowledge Retrieval Platform (RAG)",
    description:
      "Built a full-stack RAG platform with document upload, text extraction, chunking, and semantic search using FAISS. Developed a React frontend with JWT authentication, a FastAPI backend for orchestration, and OpenAI embeddings for retrieval. Achieved sub-2s query latency on 10K+ documents and deployed the system on AWS with Docker.",
    link: "https://github.com/bitanish/ai-knowledge-hub",
    tags: ["React", "FastAPI", "AWS", "RAG", "FAISS", "OpenAI API", "Docker"],
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/Project3.jpg`,
    title: "Origin Finder (Chrome Extension)",
    description:
      "Developed a Chrome extension that identifies and displays the country of origin for products on Amazon and Flipkart. Launched during the 2020–2021 China–India trade tensions, the tool gained 5,000+ downloads, helping users make informed purchase decisions.",
    link: "https://github.com/anishshanbhag/Origin-Finder", 
    tags: ["JavaScript", "Chrome Extension", "Web Scraping", "Product Metadata"],
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/Project4.jpg`,
    title: "API Rate Limiting Gateway",
    description:
      "Built a lightweight API gateway implementing token bucket rate-limiting per user and per API, capable of handling 1M+ requests/day with minimal latency overhead. Integrated Redis for distributed state management, JWT for authentication, and enabled dynamic configuration updates with Spring Cloud Config. Designed an admin UI for real-time policy updates.",
    link: "https://github.com/bitanish/api-gateway-service",
    tags: ["FastAPI", "Redis", "JWT", "Docker", "Spring Cloud Config", "React"],
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/Project5.jpg`,
    title: "Real-Time Log Analyzer Platform",
    description:
      "Developed a Kafka + FastAPI-based log analysis system ingesting 1M+ logs/day with sub-second latency. Implemented full-text search, live tailing, and alerting via Elasticsearch and Prometheus. Built a React dashboard for visualization and monitoring. Dockerized and deployed with CI/CD pipelines.",
    link: "https://github.com/bitanish/log-analyzer-platform",
    tags: ["Kafka", "FastAPI", "React", "Elasticsearch", "Prometheus", "Docker", "CI/CD"],
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