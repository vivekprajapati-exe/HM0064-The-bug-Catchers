import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Event Mastery
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-white mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Seamless event organization at your fingertips.
      </motion.p>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-950  font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
            <Link to={'/timeline'}>
          Get Started
            </Link>
        </motion.button>
      </motion.div>
    </div>
    </div>
  )
}

export default Hero
