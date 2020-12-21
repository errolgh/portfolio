import Banner from "../components/Banner";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export default function Home() {
  return (
    <motion.div
      id="home"
      className="container"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Banner />
      <Services />
    </motion.div>
  );
}
