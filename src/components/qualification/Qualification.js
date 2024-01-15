import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [experiences, setExperiences] = useState(1);

  const experienceHandler = (index) => {
    setExperiences(index);
  };

  // functions go here
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => {
              experienceHandler(1);
            }}
            className={
              experiences === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap"></i>
            {""}Education
          </div>
          <div
            onClick={() => {
              experienceHandler(2);
            }}
            className={
              experiences === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap"></i>
            {""}Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              experiences === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">Laikipia University, Nyahururu</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">Completed</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Enginnering</h3>
                <span className="qualification__subtitle">
                  ALX Africa{" "}
                </span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">Completed</div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">CCNA 1 & 2 & 3</h3>
                <span className="qualification__subtitle">
                  Laikipia University
                </span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2017 - completed</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Design</h3>
                <span className="qualification__subtitle">Online</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -Completed</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              experiences === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Software Developer</h3>
                <span className="qualification__subtitle">
                Software developer consultant
                </span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">April 2023 - Present</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Order Processing Officer
                </h3>
                <span className="qualification__subtitle">Otuo Kenya Ltd, Nairobi, KE</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">May 2022 - April 2023</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Attache</h3>
                <span className="qualification__subtitle">
                Wemps Telecoms Ltd, Nairobi, KE
                </span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">Oct 2021- Jan 2022</div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">LAikipia University Internal attachment</h3>
                <span className="qualification__subtitle">
                Laikipia University, Nyahururu, KE
                </span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">July 2019- Aug 2019</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              {/* <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
