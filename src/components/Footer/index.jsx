import "./Footer.css";
import { menu } from "../../data";
import { Link } from "react-scroll";
import SocialHandles from "../../ui/SocialHandles";

const Footer = () => {
  return (
    <footer>
      <div className="section__wrapper">
        <ul className="nav">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="tab"
              activeClass="btn__shine"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>

        <SocialHandles />

        <div className="copyright">
          <h3>Copyright &copy;All right reserved - | 2026</h3>
          <p className="text__muted">Built with Love By Pratik Kumar Biswal</p>
        </div>
        <div className="base__logo">
          <h1 className="full__name shine">Pratik Kumar Biswal</h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
