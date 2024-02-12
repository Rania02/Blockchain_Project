import "../index.css";
import { motion } from "framer-motion";

export default function Card(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="card"
    >
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </motion.div>
  );
}
