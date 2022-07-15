import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Hamburger } from "./hamburguer";
import { Sidebar } from "../Sidebar";
import { MoonStars, Sun } from "phosphor-react";
import ThemeContext from "../../styles/themes/context";

export function Navbar() {
  const navigate = useNavigate();
  const { theme, toggledTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  function changeSideBarState() {
    setIsOpen((curr) => !curr);
  }

  function closeNavBar() {
    setIsOpen(false);
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
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
          <Link to="/topics/principaisnoticias">
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

        <button className="changeMode" onClick={toggledTheme}>
          {theme.title === "dark" ? (
            <MoonStars size={40} color="white" />
          ) : (
            <Sun size={40} color="white" />
          )}
        </button>
      </Container>
      <Sidebar isOpen={isOpen} CloseNavBar={closeNavBar} />
    </>
  );
}
