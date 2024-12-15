import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";


const Typewriter = () => {

    const [exampleIndex, setExampleIndex] = useState(0);

    const LETTER_DELAY = 0.1;
    const BOX_FADE_DURATION = 0.125;
  
    const FADE_DELAY = 5;
    const MAIN_FADE_DURATION = 0.25;
  
    const SWAP_DELAY_IN_MS = 2000;
  
    const examples = ["Nike", "Puma", "Ascis"];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setExampleIndex((prev) => (prev + 1) % examples.length);
      }, SWAP_DELAY_IN_MS);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <span className="text-coral-red inline-block mt-2">
            {examples[exampleIndex].split("").map((l, i) => (
              <motion.span
                key={`${exampleIndex}-${i}`}
                className="relative"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: FADE_DELAY,
                  duration: MAIN_FADE_DURATION,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: i * LETTER_DELAY,
                    duration: 0,
                  }}
                >
                  {l}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: i * LETTER_DELAY,
                    times: [0, 0.1, 1],
                    duration: BOX_FADE_DURATION,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
            ))}
          </span>
  )
}

export default Typewriter
