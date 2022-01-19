import { styled, lightTheme } from "styles/stitches.config";

export const HeadlineSection = styled("section", {
  // minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "18rem 3rem 3rem",

  "@medium": {
    minHeight: "auto",
    padding: "18rem 3rem 3rem",
  },

  "@small": {
    padding: "10.2rem 3rem 3rem",
  },
});
