import { styled } from "styles/stitches.config";

export const Display = styled("span", {
  color: "$title",
  fontFamily: "TWK Everett, Helvetica Neue, Helvetica, Arial sans-serif",
  fontDisplay: "swap",
  fontSize: "28.8rem",
  fontWeight: 500,
  // lineHeight: "100%",
  letterSpacing: "-0.05em",
  margin: 0,

  "@medium": {
    fontSize: "20rem",
  },
  "@small": {
    fontSize: "9.6rem",
  },
});
