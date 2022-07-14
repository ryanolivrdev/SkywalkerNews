import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Hamburger } from "./hamburguer";
import { MoonStars } from "phosphor-react";
import { Sidebar } from "../Sidebar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  function changeSideBarState() {
    setIsOpen((curr) => !curr);
  }

  function closeNavBar() {
    setIsOpen(false);
  }

  return (
    <>
    <Container>
      <div>
        <button onClick={changeSideBarState}>
          <Hamburger />
        </button>
        <a href="/">
          <h1>
            Skywalker <span>News</span>
          </h1>
        </a>
      </div>

      <input placeholder="Pesquise assuntos, locais e fontes" type="text" />

      <button>
        < MoonStars size={40} color="white"/>
      </button>

    </Container>
    <Sidebar isOpen={isOpen} CloseNavBar={closeNavBar}/>
    </>
  );
}
