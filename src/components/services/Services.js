import React, { useState } from "react";
import "./Services.css";
const Services = () => {
  const [modal, setModalToOpen] = useState(0);

  const modalHandler = (index) => {
    setModalToOpen(index);
  };

  //   declaration of functions
  return (
    <section id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="uil uil-icons services__icon"></i>
            <h3 className="services__title">
            Version Control <br />
              /Git
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              modalHandler(1);
            }}
          >
            {" "}
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              modal === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  modalHandler(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
              Version Control
                <br />
                /Git
              </h3>
              <p className="services__modal-description">
              Experience with version control systems like Git for collaborative 
              development, code versioning, and tracking changes.
              </p>
              
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i class="uil uil-mobile-android services__icon"></i>
            <h3 className="services__title">
            Software Development <br />
               Life Cycle (SDLC):
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              modalHandler(2);
            }}
          >
            {" "}
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              modal === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  modalHandler(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                {" "}
                Software Development <br />
                Life Cycle (SDLC):
              </h3>
              <p className="services__modal-description">
              Knowledge of the various phases of software development,
               including requirements gathering, design, development, testing, deployment, and maintenance.
              </p>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class="uil uil-lightbulb-alt services__icon"></i>
            <h3 className="services__title">
            Database  <br />
              Management:
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              modalHandler(3);
            }}
          >
            {" "}
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              modal === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  modalHandler(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title text-center">
                {" "}
                Database <br />
                Management
              </h3>
              <p className="services__modal-description">
              Proficient in working with databases, including design, optimization, 
              and querying using languages like SQL.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br />
              Design
            </h3>
          </div>
          <span className="services__button">
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  {" "}
                  Product <br />
                  Design
                </h3>
                <p className="services__modal-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, explicabo!
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product
              <br /> Design
            </h3>
          </div>
          <span className="services__button">
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  {" "}
                  Product <br />
                  Design
                </h3>
                <p className="services__modal-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, explicabo!
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
