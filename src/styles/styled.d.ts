import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundBody: string;

      navbarColor: string;
      navbarBorderColor: string;
      logoColor: string;
      logoSpanColor: string;
      inputColor: string;
      inputColorHover: string;
      inputColorBorder: string;

      textSidebarColor: string;
      buttonColor: string;
      buttonColorHover: string;

      articleColor: string;
      articleColorBorder: string;

      titleColor: string;
      textColor: string;
      strongColor: string;
      linkColor: string;

      boxColor: string;
      skeletonColor: string;
    };
  }
}
