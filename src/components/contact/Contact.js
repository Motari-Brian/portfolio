import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Do you have a gig for me ? </h2>
      <span className="section__subtitle">Contact me </span>

      <div className="contact__container container grid">
        {/* <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
        </div> */}
        <div className="contact__info">
          {/* <div className="contact__card">
            <i className="bx contact__card-icon"></i>
            <h3 className="contact__card-title"></h3>
            <span className="contact__card-data"></span>
            <a href="" className="contact__button"></a>
          </div> */}
          <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">
              brianmotari3@gmail.com
            </span>
            <a
              href="mailto:brianmotari3@gmail.com"
              className="contact__button"
            >
              Email
            </a>
          </div>
          <div className="contact__card">
            <i className="bx bxl-linkedin contact__card-icon"></i>
            <h3 className="contact__card-title">Linkedin</h3>
            <span className="contact__card-data">Brian Motari</span>
            <a
              href="https://www.linkedin.com/in/brian-motari-90727a22a"
              className="contact__button"
            >
              Let's connect
            </a>
          </div>
          <div className="contact__card">
            <i className="bx bxl-github contact__card-icon"></i>
            <h3 className="contact__card-title">Github</h3>
            <span className="contact__card-data">Brian Motari</span>
            <a href="https://github.com/Motari-Brian" className="contact__button">
              View github
              <i class="bx bx-right-arrow-alt arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
