import "./Contact.css";
import { contactInfo } from "../../data";
import Pyramid from "../../ui/Pyramid";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Simple email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    const mailtoLink = `mailto:pratikbiswal1997@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="section__wrapper contact__section">
        <div className="pyramid__container">
          <Pyramid />
        </div>

        <div className="contact__group">
          <h3 className="title">
            Let's talk on your <span className="shine">great project</span>{" "}
            together
          </h3>

          <div className="contact__content__wrapper">
            {/* Left Box */}
            <div className="stylish__box left__box">
              <div className="contact__options">
                {contactInfo.map((contact, index) => (
                  <article className="option" key={index}>
                    <div className="contact__icon">
                      <img
                        src={contact.icon}
                        alt={`${contact.name} icon`}
                        loading="lazy"
                      />
                    </div>

                    <div className="contact__content">
                      <div>
                        <h4 className="name">{contact.name}</h4>
                        <p className="text__muted line__clamp__1 value">
                          {contact.value}
                        </p>
                      </div>

                      <a
                        href={contact.link}
                        onClick={(e) => {
                          // Fix for Email: open in default client without blank tab
                          if (contact.name === "Email") {
                            e.preventDefault();
                            window.location.href = contact.link;
                          }
                        }}
                        target={contact.name === "Email" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <span className="btn__shine text">
                          {contact.name === "Email" ? "Send Email" : "Message"}
                        </span>
                        <div
                          className="icon"
                          style={{ backgroundColor: contact.color }}
                        >
                          {contact.btnIcon}
                        </div>
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <SocialHandles />
            </div>

            {/* Right Box */}
            <div className="stylish__box">
              <form onSubmit={handleSubmit} className="contact__form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="submit__btn">
                  <BsFillSendFill size={18} />
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
