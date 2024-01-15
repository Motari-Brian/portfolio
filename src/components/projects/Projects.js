import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import "./Projects.css";
import projects from "../../data";

// import { useEffect, useRef, useState } from "react";
// imports happen above
const Projects = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // const [current, setCurrent] = useState(0);

  // const length = images.length;

  // creating of functions
  return (
    <section id="projects" className="projects container section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">
        Drag to scroll through projects{" "}
      </span>

      <motion.div
        ref={carousel}
        className="carousel "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel slider"
        >
          {projects.map((image) => {
            return (
              <motion.div className="item">
                <div className="project-holder">
                  <div className="small-image">
                    <img src={image.imageUrl} alt={image.imageUrl} />
                    <div className="holder-content">
                      <h2 class="project__title">
                        {image.title}
                        {/* <span className="icon">
                          <i class="uil uil-heart-alt project-icon"></i>
                        </span> */}
                      </h2>
                      <p className="project-desc">{image.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
