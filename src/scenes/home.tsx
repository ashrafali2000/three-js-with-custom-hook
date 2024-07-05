import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useVideoPlayer from "../hooks/useVideoPlayer";
import videoSRC from "../assets/video/scenes-INTRO.mp4";
import { Flex } from "@tremor/react";
import Navbar from "../components/navbar";

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const exit = { opacity: 0 };
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.8,
    },
  },
  out: {
    opacity: 0,
    y: -500,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

function Test() {
  const [show, setShow] = useState(true);
  const [showHouse, setShowHouse] = useState(false);
  const videoElement: any = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
  } = useVideoPlayer(videoElement);

  function handleVideoPlay() {
    togglePlay();
    setShow(false);
  }

  useMemo(() => {
    if (playerState.progress === 100) {
      setTimeout(() => {
        setShowHouse(true);
      }, 1500);
    }
  }, [playerState.progress]);

  if (showHouse) return <House />;

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="relative h-screen w-full bg-[url('/assets/images/home-bg.jpeg')] bg-cover bg-center bg-no-repeat"
    >
      <video
        className="h-screen w-full object-cover"
        onTimeUpdate={handleOnTimeUpdate}
        src={videoSRC}
        ref={videoElement}
        playsInline
      />

      {!show ? <Navbar /> : null}

      {!show ? (
        <div className="fixed bottom-0 w-full px-4 py-4 md:px-10 md:py-5">
          <Flex>
            <div>
              <button
                className="ml-2 rounded-md bg-white/50 p-1.5 mobile:p-2"
                onClick={togglePlay}
              >
                {!playerState.isPlaying ? (
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
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                ) : (
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
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                )}
              </button>

              <button
                className="ml-2 rounded-md bg-white/50 p-1.5 mobile:p-2"
                onClick={toggleMute}
              >
                {!playerState.isMuted ? (
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
                      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                ) : (
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
                      d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <button
              onClick={() => setShowHouse(true)}
              className="mr-1 flex items-center text-xs font-normal text-white mobile:mr-1 mobile:text-sm"
            >
              <span>NEXT SCENE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 inline-flex h-4 w-4 mobile:h-5 mobile:w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Flex>

          <label htmlFor="player-progress" className="hidden">
            player progress {playerState.progress}
          </label>
          <input
            id="player-progress"
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/75"
          />
        </div>
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={show ? "in" : "out"}
        variants={variants}
        className="absolute top-0 w-full"
      >
        <img
          key="home-baner"
          alt="home-baner"
          onClick={handleVideoPlay}
          src="/assets/images/home-baner.png"
          className="mx-auto max-h-[90vh] "
        />
      </motion.div>
    </motion.div>
  );
}

function House() {
  const navigate = useNavigate();

  function handleNextSeane() {
    navigate("/glen-moray-house");
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        className="fixed z-20 grid h-screen w-full items-center justify-center bg-[url('/assets/images/glen-moray-house.png')] bg-cover bg-center bg-no-repeat"
      >
        <img
          src="/assets/360Buttons/glen moray house.png"
          alt="glen moray house"
          onClick={handleNextSeane}
          className="-ml-2 w-[150px] cursor-pointer mobile:-ml-4 mobile:w-[200px]"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default Test;
