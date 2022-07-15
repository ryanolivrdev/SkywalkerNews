import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--text-font) var(--elements-secondary);
   }

  /* scrollbar on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
    height: 10px;
  }
  *::-webkit-scrollbar-track {
    background: var(--elements-secondary);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--text-font);
    border-radius: 20px;
    border: 3px solid var(--elements-secondary);
  }

  :root {
    --logo-font: ${props => props.theme.colors.logoFont};
    --logo-secondary: ${props => props.theme.colors.logoSecondary};
    --title-font: ${props => props.theme.colors.titleFont};
    --text-font: ${props => props.theme.colors.textFont};
    --text-secondary: ${props => props.theme.colors.textSecondary};
    --link-font: ${props => props.theme.colors.linkFont};
    --link-secondary: ${props => props.theme.colors.linkSecondary};
    --background: ${props => props.theme.colors.background};
    --elements: ${props => props.theme.colors.elements};
    --elements-secondary: ${props => props.theme.colors.elementsSecondary};
    --news-border: ${props => props.theme.colors.newsBorder};
    --divider: ${props => props.theme.colors.divider};
    --button: ${props => props.theme.colors.button};
    --button-hover: ${props => props.theme.colors.buttonHover};
    --input-hover: ${props => props.theme.colors.inputHover};
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
    background-color: ${props => props.theme.colors.backgroundBody};
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--title-font);
    font-size: 1.6rem;
    font-weight: 700;
  }

  h2 {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--title-font);
    color: white;
    font-weight: 700;
  }

  a {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--title-font);
    font-weight: 400;
  }

  p {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-secondary);
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
`;
