import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppRoutes from "./AppRoutes";

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const exit = { opacity: 0 };
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function App() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    function handleResize() {
      setIsPortrait(window.innerHeight > window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isPortrait ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="h-screen flex flex-col justify-center items-center"
          >
            <img
              src="/assets/images/please-rotate-your-device.png"
              alt="Please rotate your device"
              className="h-32 mb-5"
            />
            <p>Please rotate your device</p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AppRoutes />
      )}
    </div>
  );
}

export default App;
