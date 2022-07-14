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
    --logo-font: #FBA94C;
    --title-font: #E1E1E6;
    --text-font: #C4C4CC;
    --text-secondary: #8D8D99;
    --link-font: #81D8F7;
    --background: #09090A;
    --elements: #121214;
    --elements-secondary: #29292E;
    --divider: #323238;
    --button: #00875F;
    --button-hover: #015F43;
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
    background-color: #09090A;
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
