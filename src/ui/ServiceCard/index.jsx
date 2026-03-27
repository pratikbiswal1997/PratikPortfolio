import "./ServiceCard.css";
import SocialHandles from "../SocialHandles";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon, color, colorRGB }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        "--color-primary": color,
        "--color-primary-rgb": colorRGB,
      }}
    >
      <div className="icon-wrapper">{icon}</div>

      <h2 className="card-title">
        <span>{title}</span>
      </h2>

      <p className="card-description">{description}</p>

      <div className="social-section">
        <SocialHandles />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
