import { styled } from "styles/stitches.config";
import { Body } from "components/typography";

export const Link = styled(Body, {
  display: "flex",
  gap: ".5rem",
  alignItems: "baseline",
  transition: "color .6s",

  mixBlendMode: "difference",

  svg: {
    transition: "transform 1s",
  },

  path: {
    transition: "stroke .6s",
  },

  "&:hover": {
    color: "$primary",

    svg: {
      transform: "translateX(-40%)",
    },

    path: {
      stroke: "$primary",
    },
  },
});
