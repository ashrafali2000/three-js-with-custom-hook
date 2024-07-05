import React, { useState, useEffect } from "react";
import { TextureLoader } from "three";

const useTexture = (url: string) => {
  const [texture, setTexture] = useState();

  useEffect(() => {
    const loader = new TextureLoader();
    const newTexture: any = loader.load(url);
    setTexture(newTexture);
    return () => {
      newTexture.dispose();
    };
  }, [url]);

  return texture;
};

export default useTexture;
