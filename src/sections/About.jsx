import React from "react";

const About = () => {
  return (
    <div className="text-lightest-slate">
      <h2 className="text-3xl font-semibold mb-8 text-white font-display">About Me</h2>

      <div className="leading-relaxed text-[18px] max-w-3xl font-body">
        <img
          src="/profile.png"
          alt="Anish Shanbhag Profile"
          className="w-44 h-44 rounded-sm object-cover shadow-xl mb-4 md:mb-2 md:float-right md:ml-6"
        />

        <p className="mt-0 leading-loose">
          Hi, I’m Anish, a software engineer with 5 years of experience in
          <strong> data engineering</strong> and <strong> full-stack development</strong>.
          I enjoy designing and building systems that are scalable, reliable, and secure.
        </p>

        <p className="mt-3 leading-loose">
          At <strong>Bluecore</strong>, I worked as a <strong>Senior Software Engineer</strong>,
          where I built and maintained <strong>100+ ETL workflows in Python and SQL</strong>
          to process shopper behavior data. I also developed
          <strong> JavaScript integration scripts</strong> used by enterprise retailers like
          <strong> Nike and CVS</strong>, capturing millions of daily events, and acted as a
          <strong> technical point-of-contact for client integrations</strong>.
        </p>

        <p className="mt-3 leading-loose">
          Before that, at <strong>Chariot Group</strong>, I was the sole lead developer for a
          new division called <strong>Chariot Agro</strong>. For Chariot Agro, I built a
          full-stack e-commerce platform with <strong>React, Django, and AWS</strong> that
          supported over <strong>10,000 monthly transactions</strong>, and deployed it using
          <strong> CI/CD pipelines</strong>.
        </p>

        <p className="mt-3 leading-loose">
          I began my career at <strong>LogMeIn</strong>, where I automated network operations
          and reduced downtime investigation from <strong>45 minutes to under 2 minutes</strong>.
          I bring expertise in <strong>Python, React, SQL, LLMs, and cloud infrastructure</strong>,
          and I’m passionate about turning complex problems into elegant, high-impact solutions.
        </p>
      </div>
    </div>
  );
};

export default About;