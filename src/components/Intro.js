import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.section className="home" exit="exit" variants={animationOne} transition={transition}>
      <img src="images/photo.jpeg" alt="profil-photo2" className="intro--photo" />
      <h1 className="intro--title">@harysreza</h1>
      <h3 className="intro--desc">Front End Web Developer</h3>
      <nav>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/skills">
          Skills
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </nav>
    </motion.section>
  );
};

export default Home;
