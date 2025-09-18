import React from "react";

const experiences = [
  {
    year: "Jun 2023 — May 2025",
    title: "Senior Software Engineer, Forward Deployed · Bluecore",
    description:
      "At Bluecore, I architected 100+ reliable ETL workflows (Python, SQL), developed JavaScript integrations for Fortune 500 retailers like Nike and CVS capturing millions of daily events, and acted as a technical point-of-contact for client onboarding, monitoring, and integrations.",
    tags: ["Python", "Javascript", "SQL", "YAML", "Google Cloud"],
  },
  {
    year: "Apr 2021 — Jun 2023",
    title: "Software Engineer · Chariot Group",
    description:
      "At Chariot Group, I led development of a full-stack e-commerce platform (React, Django, AWS) handling 10K+ monthly transactions, deployed scalable cloud infrastructure with CI/CD and AWS Lambda, and implemented secure authentication with OWASP best practices.",
    tags: ["Django", "React", "AWS"],
  },
  {
    year: "Jul 2020 — Nov 2020",
    title: "Associate Software Engineer · LogMeIn",
    description:
      "At LogMeIn, I automated network operations by building a monitoring dashboard and AWS Lambda functions, reducing downtime investigation from 45 minutes to under 2 minutes.",
    tags: ["React", "AWS Lambda", "AWS SNS", "AWS Direct Connect"],
  },
];

const Experience = () => {
  return (
    <div className="text-lightest-slate">
      <h2 className="text-3xl font-bold mb-8 text-white font-display">Experience</h2>
      <div className="space-y-16 font-body">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 p-4 lg:p-6 rounded-lg
                      transition-all duration-300 ease-in-out
                      hover:bg-light-navy hover:shadow-lg"
          >
            <div className="w-full lg:w-1/4 text-grey-text text-[14px] font-medium">
              {exp.year}
            </div>

            <div className="w-full lg:w-3/4">
              <h2 className="text-lg font-semibold mb-2 lg:mb-0 text-green-accent group-hover:text-green-accent">
                {exp.title}
              </h2>
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

      <div className="mt-16 text-center lg:text-left">
        <a
          href={`${process.env.PUBLIC_URL}/anishshanbhag.pdf`}
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
