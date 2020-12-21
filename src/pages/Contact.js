import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export default function Contact() {
  return (
    <motion.div
      variants={pageAnimation}
      className="container"
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ContactForm />
    </motion.div>
  );
}
