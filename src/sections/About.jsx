// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="text-lightest-slate">
      <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2> {/* The heading remains a standalone element */}

      {/* This div contains the image (floated right) and the paragraphs */}
      {/* The 'overflow-hidden' class helps ensure the float is contained within this div */}
      <div className="leading-relaxed text-[15px] overflow-hidden">
        {/* Your profile photo, now floated to the right */}
        <img
          src="/profile.png" // Assumes your processed profile.png is in the public folder
          alt="Anish Shanbhag Profile"
          className="float-right w-56 h-56 rounded-sm object-cover shadow-xl ml-8 mb-4"
          // float-right: Positions the image to the right, allowing text to wrap
          // w-56 h-56: Makes the image larger (224px by 224px) for clear visibility
          // rounded-sm: Gives it a subtle corner radius, making it appear square but not sharp
          // object-cover: Ensures the image fills its container without distortion
          // shadow-xl: Adds a more prominent shadow for depth
          // ml-8: Adds margin to the left of the image, creating space between it and the text
          // mb-4: Adds a small margin below the image, useful if the text is shorter than the image
          // border-2 border-green-accent: Adds a subtle border in your accent color, defining the image
        />

        {/* The paragraphs will now flow around the floated image */}
        <p className="mt-0"> {/* mt-0 to prevent unwanted top margin from space-y-6 */}
          I’m a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.
        </p>

        <p className="mt-6">
          Currently, I'm a <strong>Senior Front-End Engineer at Klaviyo</strong>, specializing
          in accessibility. I contribute to the creation and maintenance of UI
          components that power Klaviyo’s frontend, ensuring our platform meets
          web accessibility standards and best practices to deliver an inclusive
          user experience.
        </p>

        <p className="mt-6">
          In the past, I've had the opportunity to develop software across a
          variety of settings — from <strong>advertising agencies</strong> and <strong>large corporations</strong>{" "}
          to <strong>start-ups</strong> and <strong>small digital product studios</strong>. Additionally, I also
          released a <strong>comprehensive video course</strong> a few years ago, guiding learners
          through building a web app with the Spotify API.
        </p>

        <p className="mt-6">
          In my spare time, I’m usually climbing, reading, hanging out with my
          wife and two cats, or running around Hyrule searching for <strong>Korok seeds</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;