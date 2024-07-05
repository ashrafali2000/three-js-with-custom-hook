import {
  Preload,
  OrbitControls,
  DeviceOrientationControls,
  useProgress,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import PortalsPopup from "../components/portalsPopup";
import Portals from "../components/portals";
import Navbar from "../components/navbar";
import { store } from "../data/store";

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function GlenMorayHouse() {
  const [which, setWhich] = useState(0);
  const [open, setOpen] = useState(false);
  const [asset, setAsset] = useState("popup-The-Crest");
  const [bg360, setBg360] = useState("/assets/images/bg-360-1.png");

  const [event, setEvent] = useState<any>(null);
  const [deviceorientation, setDeviceorientation] = useState(false);

  window.addEventListener("deviceorientation", function (event: any) {
    setEvent(event.alpha);
  });

  return (
    <>
      {!open ? <Navbar /> : null}

      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        style={{
          backgroundImage: `url(${bg360})`,
        }}
        className={`relative grid h-screen w-full cursor-grab items-center justify-center bg-cover bg-center bg-no-repeat`}
      >
        {which === 0 ? (
          <Canvas
            style={{ width: "100vw", height: "100vh" }}
            camera={{ position: store[which].position }}
          >
            {!deviceorientation ? (
              <OrbitControls
                autoRotate={true}
                autoRotateSpeed={0.2}
                rotateSpeed={-0.4}
                minDistance={1}
                maxDistance={300}
              />
            ) : (
              <DeviceOrientationControls />
            )}

            <Suspense fallback={<Loader />}>
              <Preload all />
              <Portals
                open={open}
                store={store[which]}
                setOpen={setOpen}
                setAsset={setAsset}
                setBg360={setBg360}
                setWhich={setWhich}
              />
            </Suspense>
          </Canvas>
        ) : null}

        {which === 1 ? (
          <Canvas
            style={{ width: "100vw", height: "100vh" }}
            camera={{ fov: 50, position: store[which].position }}
          >
            {!deviceorientation ? (
              <OrbitControls
                autoRotate={true}
                autoRotateSpeed={0.2}
                rotateSpeed={-0.4}
                minDistance={1}
                maxDistance={300}
              />
            ) : (
              <DeviceOrientationControls />
            )}

            <Suspense fallback={<Loader />}>
              <Preload all />
              <Portals
                open={open}
                store={store[which]}
                setOpen={setOpen}
                setAsset={setAsset}
                setBg360={setBg360}
                setWhich={setWhich}
              />
            </Suspense>
          </Canvas>
        ) : null}

        {which === 2 ? (
          <Canvas
            style={{ width: "100vw", height: "100vh" }}
            camera={{ fov: 90, position: store[which].position }}
          >
            {!deviceorientation ? (
              <OrbitControls
                autoRotate={true}
                autoRotateSpeed={0.2}
                rotateSpeed={-0.4}
                minDistance={1}
                maxDistance={300}
              />
            ) : (
              <DeviceOrientationControls />
            )}

            <Suspense fallback={<Loader />}>
              <Preload all />
              <Portals
                open={open}
                store={store[which]}
                setOpen={setOpen}
                setAsset={setAsset}
                setBg360={setBg360}
                setWhich={setWhich}
              />
            </Suspense>
          </Canvas>
        ) : null}

        {event && !open ? (
          <div className="fixed top-4 right-12 z-50 inline-block justify-end text-left mobile:right-20 mobile:top-6">
            <button
              onClick={() => setDeviceorientation(!deviceorientation)}
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
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
            </button>
          </div>
        ) : null}

        <PortalsPopup open={open} setOpen={setOpen} asset={asset} />
      </motion.div>
    </>
  );
}

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <svg
          aria-hidden="true"
          className="mr-2 h-8 w-8 animate-spin fill-slate-50 text-slate-300"
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
        <p className="mt-3 font-medium text-white">Loading...</p>
        <div className="mt-3 h-[2px] w-[300px] bg-slate-300">
          <div
            style={{ width: `${progress}%` }}
            className="h-[2px] bg-slate-50"
          />
        </div>
      </div>
    </Html>
  );
}
