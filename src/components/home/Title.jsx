import React from 'react';
import { motion } from "framer-motion";

const Title = ({ title, subtitle }) => {
  return (
    <div className="mb-12" dir="ltr" >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col items-center justify-center gap-2"
      >
        {/* Title with animated lines */}
        <div className="flex items-center uppercase justify-center w-full gap-4">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="h-0.5 bg-gradient-to-l from-blue-400 to-transparent w-20"
          />

          <motion.h2 
            className="text-4xl max-sm:text-2xl max-sm:px-2 font-bold text-center dark:text-white text-gray-800 px-4" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {title}
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="h-0.5 bg-gradient-to-r from-blue-400 to-transparent w-20"
          />
        </div>

        {/* Optional subtitle with animation */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            viewport={{ once: false }}
            className="text-lg text-gray-600 dark:text-gray-300   max-w-2xl text-center"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Title;