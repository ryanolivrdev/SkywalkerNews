import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.titleColor} transparent;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
   }

  /* scrollbar on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
  width: 8px;
  height: 0px;
  }
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.colors.titleColor};
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.navbarBorderColor};
}

:root {
    --backgroundBody: ${(props) => props.theme.colors.backgroundBody};

    --navbarColor: ${(props) => props.theme.colors.navbarColor};
    --navbarBorderColor: ${(props) => props.theme.colors.navbarBorderColor};
    --logoColor: ${(props) => props.theme.colors.logoColor};
    --logoSpanColor: ${(props) => props.theme.colors.logoSpanColor};
    --inputColor: ${(props) => props.theme.colors.inputColor};
    --inputColorHover: ${(props) => props.theme.colors.inputColorHover};
    --inputColorBorder: ${(props) => props.theme.colors.inputColorBorder};

    --textSidebarColor: ${(props) => props.theme.colors.textSidebarColor};
    --buttonColor: ${(props) => props.theme.colors.buttonColor};
    --buttonColorHover: ${(props) => props.theme.colors.buttonColorHover};

    --articleColor: ${(props) => props.theme.colors.articleColor};
    --articleColorBorder: ${(props) => props.theme.colors.articleColorBorder};

    --titleColor: ${(props) => props.theme.colors.titleColor};
    --textColor: ${(props) => props.theme.colors.textColor};
    --strongColor: ${(props) => props.theme.colors.strongColor};
    --linkColor: ${(props) => props.theme.colors.linkColor};

    --boxColor: ${(props) => props.theme.colors.boxColor};
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--backgroundBody);
    overflow: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  h1 {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--titleColor);
    font-size: 1.6rem;
    font-weight: 700;
  }

  h2 {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--strongColor);
    font-weight: 700;
  }

  a {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--titleColor);
    font-weight: 400;
  }

  p {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--textColor);
    font-weight: 400;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  input {
    background-color: var(--navbarBorderColor);
    color: var(--inputColor);

    border: 1px solid var(--inputColorBorder);
    border-radius: 10px;
  }

  input:hover {
    background-color: var(--textColor);
    color: var(--inputColorHover);
  }
`;
