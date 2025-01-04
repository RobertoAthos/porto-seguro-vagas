"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimationReveal({
  children,
  width = "fit-content",
  className
}: {
  children: React.ReactNode;
  width?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`${width} overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
