import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { useWindowSize } from "hooks/useWindowSize";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Background = ({ active }) => {
  const { scrollY } = useViewportScroll();
  const windowSize = useWindowSize();
  const [cursor, setCursor] = useState({ x: 1000, y: 2000 });
  const [pageHeight, setPageHeight] = useState(0);

  // opacity
  const opacity = useTransform(
    scrollY,
    [
      0,
      windowSize.height * 2,
      pageHeight - windowSize.height * 2,
      pageHeight - windowSize.height,
    ],
    ["1", "0", "0", "1"]
  );

  // useEffect
  useEffect(() => {
    const onMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setPageHeight(document.body.offsetHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <Container
        as={motion.div}
        style={{
          opacity,
          "--is-active": active ? 0.8 : 0.4,
          "--cursor-x": cursor.x / windowSize.width,
          "--cursor-y": cursor.y / windowSize.height,
        }}
      ></Container>
    </motion.div>
  );
};
