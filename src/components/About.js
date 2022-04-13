import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../animations";
import { MdArrowDownward } from "react-icons/md";

const About = () => {
  let width = window.innerWidth;

  return (
    <motion.section className="about" initial="initial" animate="animate" exit="exit" variants={animationTwo} transition={transition}>
      <h1>About</h1>
      <p className="about--content">
        Hi, my name is Hariz Reza. <br />
        Front End Web Developer {width < 768 ? <br /> : ""} from Semarang, Indonesia.
        <br />I am enjoy playing around with HTML, CSS, and JavaScript. <br />
      </p>
      <p className="about--social">
        I'm on{" "}
        <a href="https://github.com/harysreza" target="_blank" rel="noreferrer" title="GitHub Page">
          <b>GitHub</b>
        </a>
        ,{" "}
        <a href="https://twitter.com/harysreza" target="_blank" rel="noreferrer" title="Twitter Page">
          <b>Twitter</b>
        </a>
        , and{" "}
        <a href="https://instagram.com/harysreza" target="_blank" rel="noreferrer" title="Instagram Page">
          <b>Instagram</b>
        </a>
      </p>
      <Link to="/home">
        <MdArrowDownward className="back" />
      </Link>
    </motion.section>
  );
};

export default About;
