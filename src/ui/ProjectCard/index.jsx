import "./ProjectCard.css";

const ProjectCard = ({ title, category, image, description, stacks, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project__card-link"
    >
      <div className="project__card">
        <div className="project__card-top">
          <div className="project__image-wrapper">
            <img
              src={image}
              alt={`${title} visual`}
              className="project__image"
            />
          </div>
        </div>

        <div className="project__card-bottom">
          <div className="project__info">
            <div className="project__logo">
              <img src={image} alt={`${title} logo`} />
            </div>
            <div>
              <h3 className="project__title">{title}</h3>
              <p className="project__category">{category}</p>
            </div>
          </div>

          <p className="project__description">{description}</p>

          <div className="project__stacks">
            {stacks.map((stack, index) => (
              <div className="project__stack" key={index}>
                <img src={stack.logo} alt={stack.name || `Tech ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
