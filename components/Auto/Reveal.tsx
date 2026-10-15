import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
}: RevealProps) => {
  return (
    <div
      className={
        width === "100%" ? "auto-reveal auto-reveal--full" : "auto-reveal"
      }
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="auto-reveal__cover"
        variants={{
          hidden: {
            x: "0%",
          },
          visible: {
            x: "100%",
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          ease: "easeIn",
          delay: delay,
        }}
      />
      <style jsx>{`
        .auto-reveal {
          position: relative;
          width: fit-content;
          overflow: hidden;
        }

        .auto-reveal--full {
          width: 100%;
        }

        .auto-reveal :global(.auto-reveal__cover) {
          position: absolute;
          top: 4px;
          right: 0;
          bottom: 4px;
          left: 0;
          z-index: 20;
          background: white;
        }
      `}</style>
    </div>
  );
};
