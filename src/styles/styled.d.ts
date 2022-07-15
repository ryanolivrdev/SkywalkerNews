import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundBody: string;

      logoFont: string;
      logoSecondary: string;

      titleFont: string;
      textFont: string;
      textSecondary: string;
      linkFont: string;
      linkSecondary: string;
      background: string;
      elements: string;
      elementsSecondary: string;
      newsBorder: string;
      divider: string;
      button: string;
      buttonHover: string;
      inputHover: string;
      SkeletonColor: string;
    };
  }
}
