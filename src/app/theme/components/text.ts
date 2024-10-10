import { defineStyleConfig } from "@chakra-ui/styled-system";
import "@fontsource-variable/inter";

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
    fontSize: "128px",
    fontFamily: `Inter Variable, sans-serif`,
    // added styling text shadow to make font bolder,
    // font weight does not change beyond 600
    color: "foreground.100",
  },
  sizes: {
    xs: {
      fontSize: "12px",
    },
    sm: {
      fontSize: "16px",
    },
    md: {
      fontSize: "24px",
    },
    lg: {
      fontSize: "32px",
    },
  },
  defaultProps: {
    size: "sm",
  },
});
