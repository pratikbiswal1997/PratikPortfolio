import "./Facts.css";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import { useEffect, useState } from "react";

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(4); // Set your actual stats here
      setProjects(3);
      setClients(20); // 1.5K clients
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center odometer__wrap">
          <Odometer value={experience} className="odometer" format="d" />
          <span className="suffix">+</span>
        </div>
        <p className="label">Years of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center odometer__wrap">
          <Odometer value={projects} className="odometer" format="d" />
          <span className="suffix">+</span>
        </div>
        <p className="label">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="flex__center odometer__wrap">
          <Odometer value={clients} className="odometer" format="(.dd)" />
          <span className="suffix">+</span>
        </div>
        <p className="label">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Facts;
