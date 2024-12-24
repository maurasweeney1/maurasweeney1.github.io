import React from "react";
import "./index.scss";

const About = () => {
  const handleRedirect = () => {
    window.open("https://maurasweeney1.github.io/best-self/", "_blank");
  };

  return (
    <>
      <div className="container about-page">
        <h1>About Me</h1>
        <span>
          <img
            src="../../assets/images/meInLisbon"
            alt="Image of me"
            style={"width: 75px"}
          />
          <p>
            I'm always looking for opportunities to gain new skills and put what
            I've learned into practice, so I am currently seeking internships to
            apply my skills in real world scenarios.
          </p>
          <p>
            Read more about my experience in my{" "}
            <a
              href="../public/Sweeney.pdf"
              download="Sweeney.pdf"
              className="download-button"
            >
              Resume
            </a>
          </p>
        </span>
        <div>
          <h3>My Best Self</h3>
          <p>
            A project created using HTML, CSS, and featuring a reflection tool
            based on the self-evaluation tool developed at the University of
            Michigan's Ross School of Business.
          </p>
          <div className="best-self-preview" onClick={handleRedirect}>
            <p>Click to open My Best Self in full</p>
            <iframe
              src="https://maurasweeney1.github.io/best-self/"
              width="400"
              height="300"
              title="Site Preview"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
