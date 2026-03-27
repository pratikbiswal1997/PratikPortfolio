import "./Navbar.css";
import Logo from "../../assets/Logo.jsx";
import { FaTimes } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showSidebar) {
        setShowSidebar(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSidebar]);

  return (
    <nav className="card flex__center navbar">
      {/* Overlay */}
      {showSidebar && (
        <div className="aside__overlay" onClick={() => setShowSidebar(false)} />
      )}

      {/* Logo - scroll to top */}
      <div
        className="flex__center logo"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
      >
        <Logo />
      </div>

      {/* Sidebar */}
      <aside className={`flex__center sidebar ${showSidebar ? "visible" : ""}`}>
        <div className="flex sidebar__top">
          <span
            className="icon_container close__btn"
            onClick={() => setShowSidebar(false)}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          >
            <FaTimes />
          </span>
        </div>

        <div className="flex sidebar__middle">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
              className="tab"
              activeClass="btn__shine"
              onClick={() => setShowSidebar(false)}
            >
              {list.name}
            </Link>
          ))}
        </div>
      </aside>

      {/* Right-side CTA buttons */}
      <div className="flex__center buttons__wrapper">
        <Link to="contact" className="btn flex__center hire__btn">
          Hire Me
          <div className="flex__center icon">
            <FaArrowUpRightFromSquare />
          </div>
        </Link>

        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSidebar(true)}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
