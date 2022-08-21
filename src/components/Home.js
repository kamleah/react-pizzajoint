import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVarient = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: { delay: 2 }
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
};

const containerVarients = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const Home = () => {
  return (
    <motion.div
      // varitents={containerVarients}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      exit={{ x: '-100vw', transition: { ease: 'easeInOut' }}}

      className="home container">
      <motion.h2 animate={{ fontSize: 50, color: '#ff2994' }} transition={{ delay: 1.5 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVarient}
          animate="visible"
          whileHover="hover"
        // animate={{ scale: 1.1 }}
        // transition={{ delay: 1.5 }}
        // whileHover={{
        //   scale: 1.1,
        //   textShadow: "0px 0px 8px rgb(255,255,255)",
        //   boxShadow: "0px 0px 8px rgb(255,255,255)",
        // }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;