import { styled } from "styles/stitches.config";

export const Section = styled("div", {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  gap: "16rem",
  flexBasis: 0,
  padding: "3.4rem 0",
  top: 0,
  width: "100%",
  overflow: "hidden",

  "@medium": {
    minHeight: "auto",
    flexDirection: "column!important",
    gap: "8.5rem",
    padding: "8.5rem 9.5rem",
  },

  "@small": {
    padding: "10.2rem 4.5rem",
    gap: "6.8rem",
  },

  variants: {
    left: {
      true: {
        flexDirection: "row-reverse",
      },
    },
    hideMobile: {
      true: {
        "@medium": {
          display: "none",
        },
      },
    },
  },
});
