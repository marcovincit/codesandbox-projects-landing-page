import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Lock } from "./icons/Lock";
import { Heading, Body } from "components/typography";
import { HeadlineSection, HeadlineSubSection } from "./styles";

export const Headline = () => {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // lock icon
  const lockProgress = useTransform(
    scrollY,
    [containerTop - containerHeight / 2, containerTop],
    ["20px", "0px"]
  );

  // useEffect
  useEffect(() => {
    if (!container.current) return;
    const onResize = () => {
      setContainerTop(container.current.offsetTop);
      setContainerHeight(container.current.offsetHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [container]);

  // return
  return (
    <HeadlineSection
      as={motion.div}
      ref={container}
      style={{
        "--lock-progress": lockProgress,
      }}
    >
      <HeadlineSubSection>
        <Lock />

        <div>
          <Heading size={2} as="h2">
            No lock-in.
          </Heading>
          <Heading size={2} as="h3" css={{ color: "$support-text" }}>
            Use the tools
            <br />
            you love.
          </Heading>
        </div>

        <Body
          size={1}
          as="p"
          css={{
            maxWidth: "50rem",
            "@small": {
              maxWidth: "28rem",
            },
          }}
        >
          With your CodeSandbox, you can code from any device, using VSCode,
          play.js, or your browser.
        </Body>
      </HeadlineSubSection>
    </HeadlineSection>
  );
};
