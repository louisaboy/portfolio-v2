import { defineStyle } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/styled-system";

const fontStyle = {
  fontFamily: `Inter Variable, sans-serif`,
  fontSize: { base: "18px" },
};

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "full",
    border: "1px solid",
    ":focus:not(:focus-visible)": {
      shadow: "none",
    },
    bg: "transparent",
    _disabled: { pointerEvents: "not-allowed" },
  },

  sizes: {
    sm: {
      fontSize: "12px",
      px: "12px",
      py: "4px",
    },
    md: {
      fontSize: "16px",
      px: "48px",
      py: "8px",
    },
  },

  variants: {
    solid: {
      bg: "foreground.100",
      color: "background.200",
      border: "none",
      borderRadius: "full",
      ...fontStyle,
      _hover: {
        background: "hover.200",
      },
    },
    basic: {
      bg: "transparent",
      color: "foreground.100",
      border: "none",
      borderRadius: "none",
      ...fontStyle,
      _hover: {
        color: "foreground.200", // Change color on hover
        _after: {
          width: "100%", // Expand the width of the border from 0% to 100%
        },
      },
      _after: {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "0%", // Initially hidden
        height: "2px",
        backgroundColor: "foreground.100",
        transition: "width 0.4s ease", // Animation duration and effect
      },
    },
    outline: {
      bg: "transparent",
      color: "foreground.100",
      border: "2px solid",
      borderColor: "foreground.100",
      borderRadius: "full",
      ...fontStyle,
      _hover: {
        background: "foreground.200",
        color: "background.200",
      },
    },
    solid_light: {
      bg: "background.300",
      color: "foreground.100",
      border: "none",
      borderRadius: "full",
      ...fontStyle,
      _hover: {
        background: "hover.100",
        color: "foreground.100",
      },
    },
    skeleton: {
      borderColor: "default.borderlight",
      bg: "transparent",
      color: "default.primarytext",
      _hover: {
        bg: "transparent",
      },
      _active: {
        bg: "transparent",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
  },
});
