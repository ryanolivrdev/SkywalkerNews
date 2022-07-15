import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/index";
import GlobalStyle from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}
