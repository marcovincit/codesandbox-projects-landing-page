import { styled } from "styles/stitches.config";

export const Section = styled("div", {
  minHeight: "100vh",
  display: "flex",

  alignItems: "center",
  gap: "16rem",
  flexBasis: 0,
  padding: "3.4rem 0",

  overflow: "hidden",

  position: "sticky",
  top: 0,

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
    padding: "6.8rem 3.2rem",
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
        justifyContent: "flex-end",

        "@medium": {
          alignItems: "flex-end",
        },
      },
    },
  },
});
