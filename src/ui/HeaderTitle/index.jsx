import React from "react";
import Resume from "../../assets/Resume.pdf";
import "./HeaderTitle.css";

const HeaderTitle = () => {
  return (
    <div className="header-title-container">
      <svg
        className="header-title-svg"
        viewBox="0 0 615 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Line 1 */}
        <text
          className="header-title-text"
          x="307"
          y="60"
          fontSize="26"
          textAnchor="middle"
        >
          Hi, I'm Pratik Kumar Biswal
          <animate
            attributeName="fill"
            values="#FFFFFF;#1868db;#FFFFFF"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="font-size"
            values="26;20;26"
            keyTimes="0;0.5;1"
            dur="10s"
            repeatCount="indefinite"
          />
        </text>

        {/* Line 2 */}
        <text
          className="header-title-text"
          x="307"
          y="120"
          fontSize="22"
          textAnchor="middle"
        >
          Full-Stack Software Developer | React.js | Node.js | UX/UI Design
          <animate
            attributeName="fill"
            values="#FFFFFF;#fca700;#FFFFFF"
            dur="10s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="font-size"
            values="22;17;22"
            keyTimes="0;0.5;1"
            dur="10s"
            begin="1s"
            repeatCount="indefinite"
          />
        </text>

        {/* Paragraph Block */}
        <text
          className="header-title-text"
          x="307"
          y="180"
          fontSize="18"
          textAnchor="middle"
        >
          <tspan x="307" dy="1.5em">
            I specialize in building scalable, high-performance web applications
          </tspan>
          <tspan x="307" dy="1.5em">
            with a strong focus on user experience and clean code. With
            expertise
          </tspan>
          <tspan x="307" dy="1.5em">
            in React.js, Node.js, and modern UX/UI principles, I turn ideas into
          </tspan>
          <tspan x="307" dy="1.5em">
            interactive, efficient, and intuitive digital experiences.
          </tspan>
          <animate
            attributeName="fill"
            values="#FFFFFF;#b259ef;#FFFFFF"
            dur="10s"
            begin="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="font-size"
            values="18;14;18"
            keyTimes="0;0.5;1"
            dur="10s"
            begin="2s"
            repeatCount="indefinite"
          />
        </text>
      </svg>

      {/* Resume Button */}
      <a
        href={Resume}
        download="Pratik_Kumar_Biswal_Resume.pdf"
        className="download-resume-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default HeaderTitle;
