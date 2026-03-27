import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
import { motion } from "framer-motion";
import Pyramid from "../../ui/Pyramid";

const code = `const developer = {
  firstName: "Pratik",
  middleName: "Kumar",
  lastName: "Biswal",
  Profession: "Full Stack Developer",
  hobby: () => {
    // Travelling;
    // Watch geopolitical news;
    // Spend time with my family and friends
    // Playing badminton
  }
}`;
const Header = () => {
  return (
    <header id="header">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>

        <div className="grid upper">
          <motion.div
            className="column"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeaderTitle />
          </motion.div>

          <motion.div
            className="column"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile__wrapper">
              <BreathCircle />
              <img
                src={profile1}
                alt="Portrait of Pratik Kumar Biswal"
                className="profile__photo"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="card grid lower"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <CodeBlock language={"Javascript"} code={code} />
          <p className="text__muted description">
            I break down complex user experience problems to build honest,
            meaningful solutions that connect with Millions.
          </p>
          <Facts />
          <SocialHandles />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
