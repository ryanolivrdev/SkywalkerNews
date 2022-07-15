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
import { Link, NavLink, useParams } from "react-router-dom";
import { useState } from "react";

interface SideBarProps {
  isOpen: boolean;
  CloseNavBar: any;
}

export function Sidebar(props: SideBarProps) {
  let { slug } = useParams<{ slug: string }>();

  slug = slug?.toLowerCase();

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
          to="/topics/Principaisnoticias"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <Globe />
          <p>Principais Notícias</p>
        </NavLink>
        <NavLink
          to="/topics/Covid-19"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <ShieldPlus />
          <p>Covid-19</p>
        </NavLink>
        {props.isOpen ? <Divider /> : ""}
        <NavLink
          to="/topics/Entretenimento"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <FilmStrip />
          <p>Entretenimento</p>
        </NavLink>
        <NavLink
          to="/topics/Tecnologia"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <RocketLaunch />
          <p>Tecnologia</p>
        </NavLink>
        <NavLink
          to="/topics/Economia"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <Briefcase />
          <p>Economia</p>
        </NavLink>
        <NavLink
          to="/topics/Esportivo"
          className={({ isActive }) => (isActive ? "AtiveLink" : undefined)}
          onClick={props.CloseNavBar}
        >
          <Bicycle />
          <p>Esportes</p>
        </NavLink>
        <NavLink
          to="/topics/Saude"
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
