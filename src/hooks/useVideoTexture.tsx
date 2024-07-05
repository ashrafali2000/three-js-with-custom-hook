import * as THREE from "three";
import { useState, useEffect } from "react";

const useVideoTexture = (videoSrc: string) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.preload = "auto";

    const texture: any = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    setTexture(texture);

    return () => {
      video.pause();
      setTexture(null);
    };
  }, [videoSrc]);

  return texture;
};

export default useVideoTexture;
