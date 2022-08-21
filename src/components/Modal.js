import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const modalvarients = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "20px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className='backdrop'
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden">
                    <motion.div className='modal'
                        variants={modalvarients}>
                        <p>Want to make order another pizza</p>
                        <Link to="/"><button>Start Again</button></Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal