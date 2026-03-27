import "./Testimonials.css";
import { testimonials } from "../../data";

const Testimonials = () => {
  return (
    <section id="testimonials" aria-label="Testimonials Section">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Testimonials</h2>
        </div>

        <div className="testimonial__slider">
          <div className="testimonial__track">
            {[...testimonials, ...testimonials].map(
              ({ avatar, name, review }, index) => (
                <div className="testimonial__card" key={index}>
                  <div className="testimonial__avatar">
                    <img src={avatar} alt={`${name} avatar`} />
                  </div>
                  <h3 className="testimonial__name">{name}</h3>
                  <p className="testimonial__review">{review}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
