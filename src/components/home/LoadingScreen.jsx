'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingOverlay({isLoading , setIsLoading}) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Random delay between 2-4 seconds like in your original code
    const random = Math.floor(Math.random() * 2000) + 2000;
    
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setAnimationComplete(true), 1000);
      }, random);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const timeout = setTimeout(handleLoad, 60000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  if (animationComplete) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[1000] overflow-hidden bg-transparent">
          {/* Left Panel */}
          <motion.div
            className="absolute top-0 left-0 w-[51%] h-full bg-gray-800 z-[1000]"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            transition={{ 
              duration: 0.7,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 3
            }}
          />
          
          {/* Right Panel */}
          <motion.div
            className="absolute top-0 right-0 w-[51%] h-full bg-gray-800 z-[1000]"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            exit={{ x: '100%' }}
            transition={{ 
              duration: 0.7,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 3
            }}
          />

          {/* Logo - You'll need to replace this with your actual logo */}
          <motion.div
            className="absolute left-1/2 top-[15%] w-[20em] h-[9.375em] z-[1001]"
            style={{ 
              backgroundImage: "url('http://imgh.us/loading_4.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transform: "translateX(-50%)"
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Spinning Circles */}
          <motion.div
            className="absolute left-1/2 top-[35%] w-[150px] h-[150px] z-[1001]"
            style={{
              margin: "-75px 0 0 -75px",
              borderRadius: "50%",
              border: "3px solid transparent",
              borderTopColor: "#fff"
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Inner circle 1 */}
            <motion.div
              className="absolute inset-[5px] rounded-full border-[3px] border-transparent border-t-white"
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
            />
            
            {/* Inner circle 2 */}
            <motion.div
              className="absolute inset-[15px] rounded-full border-[3px] border-transparent border-t-white"
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}