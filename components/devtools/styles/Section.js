import { styled } from "styles/stitches.config";

export const Section = styled("div", {
  minHeight: "100vh",
  display: "flex",

  alignItems: "center",
  gap: "16rem",
  flexBasis: 0,
  padding: "3.4rem 0",

  width: "50%",
  overflow: "hidden",

  position: "sticky",
  top: 0,

  // background: "rgba(250, 255, 0, 0.2)",
  // borderTop: "solid 1px black",

  "@medium": {
    width: "100%",
    position: "initial",
    alignItems: "flex-start",
    minHeight: "auto",
    flexDirection: "column!important",
    gap: "8.5rem",
    padding: "8.5rem 9.5rem",
  },

  "@small": {
    padding: "10.2rem 3.2rem",
    gap: "6.8rem",
  },

  variants: {
    position: {
      center: {
        "@medium": {
          alignItems: "center",
        },
      },
      left: {
        "@medium": {
          alignItems: "flex-end",
        },
      },
    },
  },
});
