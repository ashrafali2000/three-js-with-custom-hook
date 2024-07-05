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

export default function Test() {
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

      <iframe src="https://glenmoray-360.vercel.app/" className="w-full h-screen"/>
    </>
  );
}

