import { motion } from "framer-motion";

export default function Partnair(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="p-parent"
    >
      <img src={"/" + props.file} className="partnair" />
      <p>{props.title}</p>
    </motion.div>
  );
}
