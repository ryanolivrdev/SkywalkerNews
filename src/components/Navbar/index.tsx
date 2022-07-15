import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Hamburger } from "./hamburguer";
import { Sidebar } from "../Sidebar";
import { MoonStars } from "phosphor-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

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

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width <= 1172) {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <Container>
        <div>
          <button onClick={changeSideBarState}>
            <Hamburger />
          </button>
          <Link to="/topics/Principaisnoticias">
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

        <button className="changeMode">
          <MoonStars size={40} color="white" />
        </button>
      </Container>
      <Sidebar isOpen={isOpen} CloseNavBar={closeNavBar} />
    </>
  );
}
