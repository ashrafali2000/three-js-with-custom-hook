import { useState, useEffect } from "react";
import * as THREE from "three";

interface CombinedLoader extends THREE.Loader {
  load: (
    url: string,
    onLoad?: (result: unknown) => void,
    onProgress?: (event: ProgressEvent<EventTarget>) => void,
    onError?: (event: ErrorEvent) => void
  ) => unknown;
}

const useAssetLoader = <T extends THREE.Texture | THREE.VideoTexture>(
  urls: string[]
): T[] => {
  const [textures, setTextures] = useState<T[]>([]);

  useEffect(() => {
    const loader: CombinedLoader = new THREE.TextureLoader() as CombinedLoader;
    const videoLoader: CombinedLoader =
      new THREE.TextureLoader() as CombinedLoader;

    const loadTexture = async (url: string): Promise<T> => {
      return new Promise((resolve, reject) => {
        const onLoad: any = (texture: T) => resolve(texture);
        const onProgress = undefined;
        const onError = (error: ErrorEvent) => reject(error);

        const isVideo = url.endsWith(".mp4");

        if (isVideo) {
          videoLoader.load(url, onLoad, onProgress, onError);
        } else {
          loader.load(url, onLoad, onProgress, onError);
        }
      });
    };

    const loadTextures = async () => {
      const promises = urls.map((url) => loadTexture(url));
      const loadedTextures = await Promise.all(promises);
      setTextures(loadedTextures);
    };

    loadTextures();
  }, [urls]);

  return textures;
};

export default useAssetLoader;
