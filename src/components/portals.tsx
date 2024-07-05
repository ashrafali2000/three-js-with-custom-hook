import { useState } from "react";
import * as THREE from "three";
import { Html, useTexture, useVideoTexture } from "@react-three/drei";
import { classNames } from "../hooks/classNames";
import { store } from "../data/store";
import { Color } from "three";

export default function Portals({
  open,
  store,
  setOpen,
  setAsset,
  setBg360,
  setWhich,
}: {
  open: any;
  store: any;
  setOpen: any;
  setAsset: any;
  setBg360: any;
  setWhich: any;
}) {
  const { cards, color }: any = store;
  const newColor: any = new Color(color.r, color.g, color.b).multiplyScalar(
    color.intensity
  );

  let texture: any;
  if (store.type === "video") {
    setBg360(store.bgUrl);
    texture = useVideoTexture(store.url, {
      autoplay: true,
      loop: true,
      muted: true,
    });
  } else {
    setBg360(store.bgUrl);
    texture = useTexture(store.url);
  }

  return (
    <group>
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          side={THREE.BackSide}
          toneMapped={cards.toneMapped}
          color={newColor}
        />
      </mesh>

      {cards.map((card: any, i: number) => (
        <mesh key={i} position={card.position}>
          <Html center>
            {card.icon ? (
              <span
                onClick={() => setWhich(card.link)}
                className={classNames(
                  open ? "hidden" : "block",
                  "relative flex h-[45px] w-[45px] cursor-pointer mobile:h-[60px] mobile:w-[60px]"
                )}
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full border-2 border-white opacity-75"></span>
                <span className="relative inline-flex h-[45px] w-[45px]  rounded-full border-[5px] border-white shadow-md mobile:h-[60px] mobile:w-[60px]"></span>
              </span>
            ) : (
              <div className="w-24 mobile:w-40">
                <img
                  src={card.url}
                  alt={card.name}
                  onClick={() => {
                    setAsset(card.popupName);
                    setOpen(true);
                  }}
                  draggable="false"
                  className={classNames(
                    open ? "hidden" : "block",
                    "-z-10 mt-5 w-full cursor-pointer"
                  )}
                />
              </div>
            )}
          </Html>
        </mesh>
      ))}
    </group>
  );
}
