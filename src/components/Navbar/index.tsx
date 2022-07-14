import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Hamburger } from "./hamburguer";
import { MoonStars } from "phosphor-react";
import { Sidebar } from "../Sidebar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function changeSideBarState() {
    setIsOpen((curr) => !curr);
  }

  function closeNavBar() {
    setIsOpen(false);
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (search !== "") {
      navigate(`/search/${search.replace(/\s+/g, "-")}`);
    }
  };

  return (
    <>
      <Container>
        <div>
          <button onClick={changeSideBarState}>
            <Hamburger />
          </button>
          <Link to="/">
            <h1>
              Skywalker <span>News</span>
            </h1>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Pesquise assuntos, locais e fontes"
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>

        <button>
          <MoonStars size={40} color="white" />
        </button>
      </Container>
      <Sidebar isOpen={isOpen} CloseNavBar={closeNavBar} />
    </>
  );
}
