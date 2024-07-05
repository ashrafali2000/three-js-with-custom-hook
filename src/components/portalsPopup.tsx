import PortalsVideo from "./portalsVideo";
import { motion } from "framer-motion";
import { classNames } from "../hooks/classNames";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function PortalsPopup({
  open,
  setOpen,
  asset,
}: {
  open: boolean;
  asset: string;
  setOpen: any;
}) {
  return (
    <div className="relative z-50">
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={open ? "in" : "out"}
          transition={transition}
          variants={variants}
          className="fixed inset-0 z-50 m-auto flex items-center justify-center text-center md:px-2 lg:px-4"
        >
          <div
            className={classNames(
              asset === "popup-VIP-Experience"
                ? "max-w-[60vw]"
                : "max-w-[75vw]",
              "flex w-full transform text-left text-base transition"
            )}
          >
            <div className="relative flex aspect-video w-full items-center bg-white">
              <button
                type="button"
                className="absolute top-0 -right-9 z-10 ml-2 rounded-md bg-white/50 p-1.5 mobile:-right-11 mobile:p-2"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close</span>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {asset === "popup-VIP-Experience" ? (
                <img
                  src={`/assets/images/${asset}.jpg`}
                  alt={asset}
                  className="w-full"
                />
              ) : (
                <PortalsVideo open={open} asset={asset} />
              )}
            </div>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
