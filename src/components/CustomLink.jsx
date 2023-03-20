import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const CustomLink = ({ to, children }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={500} spy={true} exact="true">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {children}
      </motion.div>
    </ScrollLink>
  );
};

export default CustomLink;
