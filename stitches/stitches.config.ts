import { createCss } from "@stitches/react";

const { styled, css, global, getCssString } = createCss({
  theme: {
    colors: {
      black: "rgb(20, 24, 26)",
      gray: "rgb(110, 115, 117)",
      grayLight: "rgb(245, 250, 253)",
      blue: "rgb(17, 165, 253)",
      blue50: "rgb(118, 203, 253)",
      blue700: "rgb(25, 89, 128)",
      red: "rgb(255,50,50)",
    },
    space: {
      4: "4px",
      6: "6px",
      8: "8px",
      16: "16px",
    },
    fontSizes: {
      16: "16px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

let globalStylesApplied = false;
const globalStyles = global({
  body: {
    backgroundColor: "$grayLight",
  },
});

if (!globalStylesApplied) {
  globalStyles();
  globalStylesApplied = true;
}

export { styled, css, getCssString };
