import React from "react";
import "./index.scss";
import meInLisbon from "../../assets/images/meInLisbon.jpeg";

const About = () => {
  const handleRedirect = () => {
    window.open("https://maurasweeney1.github.io/best-self/", "_blank");
  };

  return (
    <>
      <div className="container about-page">
        <section className="section">
          <h1>About Me</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={meInLisbon}
              alt="Image of me"
              style={{ width: "125px" }}
            />
            <div>
              <p>
                I'm always looking for opportunities to gain new skills and put
                what I've learned into practice, so I am currently seeking
                internships to apply my skills in real world scenarios.
              </p>
              <p>
                Read more about my experience in my{" "}
                <a
                  href="../../public/Sweeney.pdf"
                  download="Sweeney.pdf"
                  className="download-button"
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div>
            <h3>My Best Self</h3>
            <p>
              A project created using HTML, CSS, and featuring a reflection tool
              based on the self-evaluation tool developed at the University of
              Michigan's Ross School of Business.
            </p>
            <div className="best-self-preview" onClick={handleRedirect}>
              <p>Click to open in a new window</p>
              <iframe
                src="https://maurasweeney1.github.io/best-self/"
                width="600"
                height="400"
                title="Site Preview"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="section slide-in">
          <div>{/* Semester Abroad */}</div>
        </section>
      </div>
    </>
  );
};

export default About;
