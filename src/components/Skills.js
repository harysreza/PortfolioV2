import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../animations";
import { MdArrowDownward } from "react-icons/md";

const Skills = () => {
  return (
    <motion.section className="skills" initial="initial" animate="animate" exit="exit" variants={animationTwo} transition={transition}>
      <h1>Skills</h1>
      <div className="skills--container">
        <div className="skills--frontend">
          <h4 className="skills--title">Frontend Developer</h4>
          <div className="skills--list">
            <div className="line">
              <h4>HTML</h4>
              <p className="skills--desc">intermediate</p>
              <h4>CSS</h4>
              <p className="skills--desc">intermediate</p>
              <h4>JavaScript</h4>
              <p className="skills--desc">intermediate</p>
            </div>
            <div className="line">
              <h4>React</h4>
              <p className="skills--desc">intermediate</p>
              <h4>Next.js</h4>
              <p className="skills--desc">basic</p>
              <h4>Bootstrap</h4>
              <p className="skills--desc">basic</p>
            </div>
            <div className="line">
              <h4>TailwindCSS</h4>
              <p className="skills--desc">basic</p>
              <h4>Styled-components</h4>
              <p className="skills--desc">basic</p>
              <h4>Git</h4>
              <p className="skills--desc">intermediate</p>
            </div>
          </div>
        </div>
        <div className="skills--backend">
          <h4 className="skills--title">Backend Developer</h4>
          <div className="skills--list">
            <div className="line">
              <h4>Node.js</h4>
              <p className="skills--desc">basic</p>
              <h4>MongoDB</h4>
              <p className="skills--desc">basic</p>
              <h4>Express</h4>
              <p className="skills--desc">basic</p>
            </div>
            <div className="line">
              <h4>Firebase</h4>
              <p className="skills--desc">basic</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/home">
        <MdArrowDownward className="back" />
      </Link>
    </motion.section>
  );
};

export default Skills;
