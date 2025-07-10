// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="text-lightest-slate"> {/* Changed to lightest-slate for body text */}
      <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2> {/* Heading remains white */}
      <div className="space-y-6 leading-relaxed text-[15px]">
        <p>
          I’m a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.
        </p>

        <p>
          Currently, I'm a <strong>Senior Front-End Engineer at Klaviyo</strong>, specializing
          in accessibility. I contribute to the creation and maintenance of UI
          components that power Klaviyo’s frontend, ensuring our platform meets
          web accessibility standards and best practices to deliver an inclusive
          user experience.
        </p>

        <p>
          In the past, I've had the opportunity to develop software across a
          variety of settings — from <strong>advertising agencies</strong> and <strong>large corporations</strong>{" "}
          to <strong>start-ups</strong> and <strong>small digital product studios</strong>. Additionally, I also
          released a <strong>comprehensive video course</strong> a few years ago, guiding learners
          through building a web app with the Spotify API.
        </p>

        <p>
          In my spare time, I’m usually climbing, reading, hanging out with my
          wife and two cats, or running around Hyrule searching for <strong>Korok seeds</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;