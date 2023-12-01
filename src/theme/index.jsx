import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";

export const lightTheme = {
  colors: {
    primaryColor: "hsl(220, 98%, 61%)",
    checkBackground:
      "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
    backgroundColor: "#fafafa",
    veryLightGray: "hsl(0, 0%, 98%)",
    textColor: "hsl(235, 19%, 35%)",
    textColorDarken: "#919096",
    checkedText: "#d4d3d9",
    white: "#fff",
    toDoBg: "#fff",
    checkColor: "#f3f3f3",
    checkHover: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
  },

  bg: {
    desktop: bgDesktopLight,
    mobile: bgMobileLight,
  },

  font: {
    primaryFont: "Josefin Sans, sans-serif",
  },
};

import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";

export const darkTheme = {
  colors: {
    primaryColor: "hsl(220, 98%, 61%)",
    checkBackground:
      "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

    backgroundColor: "#181824",
    toDoBg: "hsl(235, 24%, 19%)",
    textColor: "#c4c6df",
    textColorDarken: "#5a5c75",
    checkedText: "#5a5c75",
    white: "#fff",
    checkColor: "#2f3146",
    checkHover: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
  },

  bg: {
    desktop: bgDesktopDark,
    mobile: bgMobileDark,
  },

  font: {
    primaryFont: "Josefin Sans, sans-serif",
  },
};
