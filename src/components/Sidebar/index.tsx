import { NavLink, useParams } from "react-router-dom";
import { Container } from "./styles";
import { Divider } from "./divider";
import {
  Globe,
  ShieldPlus,
  FilmStrip,
  RocketLaunch,
  Briefcase,
  Bicycle,
  FirstAid,
  IconContext,
} from "phosphor-react";
import { SideBarProps } from "../../@types";


export function Sidebar(props: SideBarProps) {
  return (
    <Container isOpen={props.isOpen}>
      <IconContext.Provider
        value={{
          className: "IconsColors",
          size: 32,
          mirrored: false,
        }}
      >
        <NavLink
          to="/topics/principaisnoticias"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <Globe />
          <p>Principais Notícias</p>
        </NavLink>
        <NavLink
          to="/topics/covid-19"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <ShieldPlus />
          <p>Covid-19</p>
        </NavLink>
        {props.isOpen ? <Divider /> : ""}
        <NavLink
          to="/topics/entretenimento"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <FilmStrip />
          <p>Entretenimento</p>
        </NavLink>
        <NavLink
          to="/topics/tecnologia"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <RocketLaunch />
          <p>Tecnologia</p>
        </NavLink>
        <NavLink
          to="/topics/economia"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <Briefcase />
          <p>Economia</p>
        </NavLink>
        <NavLink
          to="/topics/esportivo"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <Bicycle />
          <p>Esportes</p>
        </NavLink>
        <NavLink
          to="/topics/saude"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <FirstAid />
          <p>Saúde</p>
        </NavLink>
      </IconContext.Provider>
    </Container>
  );
}
