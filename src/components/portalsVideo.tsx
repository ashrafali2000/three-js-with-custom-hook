import useVideoPlayer from "../hooks/useVideoPlayer";
import { useMemo, useRef, useState } from "react";

import popupGlenMorayArt from "../assets/video/popup-Glen-Moray-Art.mp4";
import popupTheCreation from "../assets/video/popup-The-Creation.mp4";
import popupTheCrest from "../assets/video/popup-The-Crest.mp4";
import popupOurStory from "../assets/video/popup-Our-Story.mp4";

import imageSrc from "../assets/images/video-bg.png";

export default function PortalsVideo({
  asset,
  open,
}: {
  asset: string;
  open: boolean;
}) {
  const videoElement: any = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
  } = useVideoPlayer(videoElement);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  useMemo(() => {
    if (open === true && !playerState.isPlaying) {
      // play video
      togglePlay();
    }

    if (open === false && playerState.isPlaying) {
      // stop video play
      togglePlay();
    }
  }, [open]);

  let videoSrc;
  if (asset === "popupGlenMorayArt") {
    videoSrc = popupGlenMorayArt;
  } else if (asset === "popupTheCreation") {
    videoSrc = popupTheCreation;
  } else if (asset === "popupTheCrest") {
    videoSrc = popupTheCrest;
  } else if (asset === "popupOurStory") {
    videoSrc = popupOurStory;
  }

  return (
    <div className="relative w-full">
      {/* <div style={{ opacity: isVideoLoaded ? 0 : 1 }}> */}
      <img
        src={imageSrc}
        alt="thumb"
        className="h-full w-full object-cover"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <svg
          aria-hidden="true"
          className="h-12 w-12 animate-spin fill-slate-50 text-slate-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>

      <video
        ref={videoElement}
        src={videoSrc}
        onLoadedData={onLoadedData}
        onTimeUpdate={handleOnTimeUpdate}
        className="absolute top-0 left-0 h-full w-full object-cover"
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        playsInline
      />

      <div
        className="absolute bottom-0 w-full px-3 pb-0 md:px-4 md:pb-4"
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      >
        <button
          className="mr-1.5 rounded-md bg-white/50 p-1.5 mobile:mr-2 mobile:p-2"
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
          className="rounded-md bg-white/50 p-1.5 mobile:p-2"
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
          className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-white/75 mobile:h-2"
        />
      </div>
    </div>
  );
}
