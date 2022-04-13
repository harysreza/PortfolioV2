import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../animations";
import { MdArrowDownward } from "react-icons/md";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm("service_bqoyyw5", "template_cbpohok", event.target, "VM5nhuWueWjbNkddh").then(
      (result) => {
        alert("Message Sent");
      },
      (error) => {
        alert("Message Not Sent");
      }
    );

    event.target.reset();
  };

  return (
    <motion.section className="contact" initial="initial" animate="animate" exit="exit" variants={animationTwo} transition={transition}>
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail} className="contact--form">
        <motion.input type="text" className="form--name" placeholder="Your Full Name" name="name" initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.3 }} />
        <motion.input type="email" className="form--email" placeholder="Your Email" name="email" initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.3, delay: 0.2 }} />
        <motion.textarea className="form--message" placeholder="Your Message" name="message" initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.3, delay: 0.4 }} />
        <motion.button className="btn--submit" initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
          Send
        </motion.button>
      </form>

      <p className="contact--whatsapp">
        or contact me via{" "}
        <a href="https://wa.me/6285157339411" target="_blank" rel="noreferrer" title="Send Whatsapp" className="whatsapp">
          <b>WhatsApp</b>
        </a>
      </p>

      <Link to="/home">
        <MdArrowDownward className="back" />
      </Link>
    </motion.section>
  );
};

export default Contact;
