import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVrients = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 1 //it is used to display the children tag delaying 1 sec or after 1 sec
    }
  }
};

const childVarients = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  }, [])

  return (
    <motion.div className="container order"
      variants={containerVrients}
      initial="hidden"
      animate="visible"
      exit={{ x: '-100vw', transition: { ease: 'easeInOut' }}}>
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarients}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVarients}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;