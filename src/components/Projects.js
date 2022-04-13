import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../animations";
import { MdArrowDownward } from "react-icons/md";
import { projects } from "../data/ProjectsList";
import { animationProjects } from "../animations";

const Projects = () => {
  let width = window.innerWidth;

  const [visible, setVisible] = useState(width >= 768 && width < 1024 ? 2 : 3);
  const showMore = () => {
    setVisible((prevVisible) => (width >= 768 && width < 1024 ? prevVisible + 2 : prevVisible + 3));
  };

  return (
    <motion.section className="projects" initial="initial" animate="animate" exit="exit" variants={animationTwo} transition={transition}>
      <h1>Projects</h1>
      <div className="project--card">
        {projects &&
          projects.slice(0, visible).map(({ id, image, title, description, tags, code, visit }, i) => (
            <motion.div className="card" key={id} variants={animationProjects} initial="initial" animate="animate" transition={{ duration: 0.3, delay: visible > 4 ? i * 0.2 - 0.6 : i * 0.2 }}>
              <img src={image} className="card--image" alt={`project ${id}`} />
              <h4 className="card--title">{title}</h4>
              <p className="card--desc">{description}</p>
              <div className="card--tags">
                <h6>Tools</h6>
                <ul>{tags && tags.map((tag) => <li key={id}>{tag}</li>)}</ul>
              </div>
              <div className="card--links">
                <a href={code} className={`card--link ${!code ? "disabled" : ""}`} target="_blank" rel="noreferrer" title="Source Code">
                  code
                </a>
                <a href={visit} className={`card--link ${!visit ? "disabled" : ""}`} target="_blank" rel="noreferrer" title="Web Page">
                  demo
                </a>
              </div>
            </motion.div>
          ))}
      </div>
      {visible < projects.length ? (
        <p onClick={showMore} className="showmore">
          show more
        </p>
      ) : (
        ""
      )}

      <Link to="/home">
        <MdArrowDownward className="back" />
      </Link>
    </motion.section>
  );
};

export default Projects;
