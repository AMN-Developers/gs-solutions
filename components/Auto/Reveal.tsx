import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  key: string;
  delay?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  key,
  delay = 0.25,
}: RevealProps) => {
  return (
    <motion.div
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
      key={key}
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
          duration: "0.5",
          delay: delay,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: "0.5",
          ease: "easeIn",
          delay: delay,
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          backgroundColor: "white",
          zIndex: 20,
        }}
      />
    </motion.div>
  );
};
