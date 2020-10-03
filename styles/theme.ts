import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      first: string;
      white: string;
      dark: string;
      text: string;
      link: string;
    };
    fontSizes: {
      big: string;
      h2: string;
      normal: string;
      small: string;
    };
    fontWeights: {
      medium: string;
    };
    heights: {
      header: string;
    };
    margins: {
      mb1: string;
      mb2: string;
      mb3: string;
      mb4: string;
    };
    paddings: {
      pd1: string;
      pd2: string;
      pd3: string;
      pd4: string;
    };
    zFixed: number;
    font: string;
  }
}

const colors = {
  black: "#111",
  first: "#5361ff",
  white: "#fafaff",
  dark: "#2a3b47",
  text: "#697477",
  link: "#5361ff",
};

const fontSizes = {
  big: "3.25rem",
  h2: "1.25rem",
  normal: "0.938rem",
  small: "0.813rem",
};

const fontWeights = {
  medium: "500",
};

const heights = {
  header: "3rem",
};

const margins = {
  mb1: "0.5rem",
  mb2: "1rem",
  mb3: "1.5rem",
  mb4: "2rem",
};

const paddings = {
  pd1: "0.5rem",
  pd2: "1rem",
  pd3: "1.5rem",
  pd4: "2rem",
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  fontWeights,
  heights,
  margins,
  paddings,
  zFixed: 100,
  font: "Montserrat",
};

const responsiveTheme: DefaultTheme = {
  colors,
  fontSizes: {
    big: "4.5rem",
    h2: "2rem",
    normal: "1rem",
    small: "0.875rem",
  },
  fontWeights,
  heights,
  margins,
  paddings,
  zFixed: 100,
  font: "Montserrat",
};

export { theme, responsiveTheme };
