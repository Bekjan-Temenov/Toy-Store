import "./SortBy.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SortBy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu text-black-900"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort by
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        animate={{
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)"
        }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: isOpen ? 0.7 : 0.3,
          delayChildren: 0.3,
          staggerChildren: 0.05
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
            duration: isOpen ? 0.7 : 0.2
          }}
        >
         Spinach 
        </motion.li>
        <motion.li
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
            duration: isOpen ? 0.7 : 0.2
          }}
        >
          Corn 
        </motion.li>
        <motion.li
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
            duration: isOpen ? 0.7 : 0.2
          }}
        >
          Cilantro 
        </motion.li>
        <motion.li
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
            duration: isOpen ? 0.7 : 0.2
          }}
        >
         
          
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
