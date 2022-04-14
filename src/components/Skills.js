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
              <h4 className="skill">HTML</h4>
              <p className="skills--desc">intermediate</p>
              <h4 className="skill">CSS</h4>
              <p className="skills--desc">intermediate</p>
              <h4 className="skill">JavaScript</h4>
              <p className="skills--desc">intermediate</p>
            </div>
            <div className="line">
              <h4 className="skill">React</h4>
              <p className="skills--desc">basic</p>
              <h4 className="skill">Next.js</h4>
              <p className="skills--desc">basic</p>
              <h4 className="skill">Bootstrap</h4>
              <p className="skills--desc">basic</p>
            </div>
            <div className="line">
              <h4 className="skill">TailwindCSS</h4>
              <p className="skills--desc">basic</p>
              <h4 className="skill">Git</h4>
              <p className="skills--desc">intermediate</p>
            </div>
          </div>
        </div>
        <div className="skills--backend">
          <h4 className="skills--title">Backend Developer</h4>
          <div className="skills--list">
            <div className="line">
              <h4 className="skill">Node.js</h4>
              <p className="skills--desc">basic</p>
              <h4 className="skill">MongoDB</h4>
              <p className="skills--desc">basic</p>
              <h4 className="skill">Express</h4>
              <p className="skills--desc">basic</p>
            </div>
            <div className="line">
              <h4 className="skill">Firebase</h4>
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
