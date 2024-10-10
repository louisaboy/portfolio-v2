import { defineStyleConfig } from "@chakra-ui/styled-system";
import "@fontsource/libre-franklin";
import "@fontsource-variable/libre-franklin";

export const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 700,
    fontSize: "128px",
    fontFamily: `Libre Franklin Variable, sans-serif`,
    // fontFamily: "Libre Baskerville",
    height: "fit-content",
    // added styling text shadow to make font bolder,
    // font weight does not change beyond 600
    color: "foreground.100",
    textShadow: "0px 4px 29.5px rgba(0, 0, 0, 0.46)",
    lineHeight: "1.5",
  },
  sizes: {
    xs: {
      fontSize: "48px",
    },
    sm: {
      fontSize: "72px",
    },
    md: {
      fontSize: "120px",
    },
  },
  defaultProps: {
    size: "md",
  },
});
