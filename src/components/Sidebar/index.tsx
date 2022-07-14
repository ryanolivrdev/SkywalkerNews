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
import { Link, useParams } from "react-router-dom";
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
        {slug === "principaisnoticias" || !slug ? (
          <>
            <Link
              className="AtiveLink"
              to="/topics/Principaisnoticias"
              onClick={props.CloseNavBar}
            >
              <Globe />
              <p>Principais Notícias</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/topics/Principaisnoticias" onClick={props.CloseNavBar}>
              <Globe />
              <p>Principais Notícias</p>
            </Link>
          </>
        )}
        {slug === "covid-19" ? (
          <>
            <Link
              className="AtiveLink"
              to="/topics/Covid-19"
              onClick={props.CloseNavBar}
            >
              <ShieldPlus />
              <p>Covid-19</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/topics/Covid-19" onClick={props.CloseNavBar}>
              <ShieldPlus />
              <p>Covid-19</p>
            </Link>
          </>
        )}
        {props.isOpen ? <Divider /> : ""}
        {slug === "entretenimento" ? (
          <>
            <Link
              className="AtiveLink"
              to="/topics/Entretenimento"
              onClick={props.CloseNavBar}
            >
              <FilmStrip />
              <p>Entretenimento</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/topics/Entretenimento" onClick={props.CloseNavBar}>
              <FilmStrip />
              <p>Entretenimento</p>
            </Link>
          </>
        )}
        {slug === "tecnologia" ? (
          <>
            <Link
              className="AtiveLink"
              to="/topics/Tecnologia"
              onClick={props.CloseNavBar}
            >
              <RocketLaunch />
              <p>Tecnologia</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/topics/Tecnologia" onClick={props.CloseNavBar}>
              <RocketLaunch />
              <p>Tecnologia</p>
            </Link>
          </>
        )}
        {slug === "economia" ? (
          <>
            <Link
              className="AtiveLink"
              to="/topics/Economia"
              onClick={props.CloseNavBar}
            >
              <Briefcase />
              <p>Economia</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/topics/Economia" onClick={props.CloseNavBar}>
              <Briefcase />
              <p>Economia</p>
            </Link>
          </>
        )}
        {slug === "esportivo" ? (
          <>
            <Link
              className="AtiveLink"
              to="/topics/Esportivo"
              onClick={props.CloseNavBar}
            >
              <Bicycle />
              <p className="Ative">Esportes</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/topics/Esportivo" onClick={props.CloseNavBar}>
              <Bicycle />
              <p>Esportes</p>
            </Link>
          </>
        )}
        {slug === "saude" ? (
          <>
            <Link
              className="AtiveLink"
              to="/topics/Saude"
              onClick={props.CloseNavBar}
            >
              <FirstAid />
              <p className="Ative">Saúde</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/topics/Saude" onClick={props.CloseNavBar}>
              <FirstAid />
              <p>Saúde</p>
            </Link>
          </>
        )}
      </IconContext.Provider>
    </Container>
  );
}
