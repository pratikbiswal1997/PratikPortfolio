import "./About.css";
import Hole from "../../ui/Hole";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Jira",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "GitHub Actions",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />

        <div className="column about-column">
          <div className="shine">About Me</div>
          <div className="title">
            I am <span className="color__primary">Pratik Kumar Biswal</span>
          </div>
          <div className="text__muted description">
            A passionate Full Stack Developer with a knack for crafting clean
            and efficient code. Experienced in building modern web applications
            using React.js and Node.js. Always exploring new technologies and
            best practices.
          </div>

          {/* Skills Section */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.logo} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
