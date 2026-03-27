import "./SocialHandles.css";
import { socialHandles } from "../../data";

const SocialHandles = () => {
  return (
    <div className="social__handles__container">
      {socialHandles.map((media, idx) => (
        <a
          key={idx}
          href={media.link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon__container social__handle"
        >
          <span className="tooltip">
            {media.icon}
            {media.name}
          </span>
          {media.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
