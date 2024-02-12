import { motion } from "framer-motion";

export default function Members(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="member"
    >
      <img src={"/" + props.imgName + ".jpg"} className="avatar" />
      <h3>{props.firstName}</h3>
      <p>{props.description}</p>
    </motion.div>
  );
}
