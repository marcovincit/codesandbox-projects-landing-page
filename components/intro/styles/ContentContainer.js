import { styled } from "styles/stitches.config";

export const ContentContainer = styled("div", {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  willChange: "transform, opacity",
  padding: "9rem 8rem 9rem 32rem",

  "@large": {
    padding: "6.7rem 6rem 6.7rem 24rem",
  },

  "@medium": {
    width: "100%",
    padding: "0!important",
    opacity: "1!important",
  },

  variants: {
    left: {
      true: {
        padding: "9rem 8rem 9rem 32rem",

        "@large": {
          padding: "6.7rem 6rem 6.7rem 24rem",
        },
      },
    },
  },
});
