import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const exit = { opacity: 0 };
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export default function Navbar({ children }: Props) {
  const [open, setOpen] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      const element = document.documentElement;
      element.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <>
      <motion.div
        key="menu"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        className="fixed top-4 right-4 z-50 inline-block justify-end text-left mobile:top-6 mobile:right-12"
      >
        <div className="mr-20 mt-2 mobile:mr-20 mobile:mt-12">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md bg-white/50 p-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 mobile:p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 mobile:h-5 mobile:w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {open ? (
          <AnimatePresence mode="wait">
            <motion.ul
              key="menu"
              initial={initial}
              animate={animate}
              exit={exit}
              transition={transition}
              className="absolute right-0 z-10 mt-2 w-max origin-top-right mobile:mt-4 mobile:w-40"
            >
              <li>
                <Link to="/">
                  <img
                    src="/assets/buttons/welcome.png"
                    alt="welcome"
                    className="h-8 mobile:h-10"
                  />
                </Link>
              </li>
              <li>
                <Link to="/glen-moray-house" className="mt-1 block mobile:mt-2">
                  <img
                    src="/assets/buttons/house.png"
                    alt="welcome"
                    className="h-8 mobile:h-10"
                  />
                </Link>
              </li>
            </motion.ul>
          </AnimatePresence>
        ) : null}
      </motion.div>

      {children}
    </>
  );
}
