import { Container } from "./styles";
import { Divider } from "./divider";
import { Globe, ShieldPlus, FilmStrip, RocketLaunch, Briefcase, Bicycle, FirstAid } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
  CloseNavBar: any;
}

export function Sidebar(props: SideBarProps) {
  const { slug } = useParams<{ slug: string }>();

  return (
    <Container isOpen={props.isOpen}>
      {slug === "Principaisnoticias" || !slug ? (
        <>
          <Link className="AtiveLink" to="/Principaisnoticias" onClick={props.CloseNavBar}>
            <Globe size={32} color="white" />
            <p className="Ative">Principais Notícias</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/Principaisnoticias" onClick={props.CloseNavBar}>
            <Globe size={32} color="#C4C4CC" />
            <p>Principais Notícias</p>
          </Link>
        </>
      )}
      {slug === "covid-19" ? (
        <>
          <Link className="AtiveLink" to="/topics/Covid-19" onClick={props.CloseNavBar}>
            <ShieldPlus size={32} color="white" />
            <p className="Ative">Covid-19</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Covid-19" onClick={props.CloseNavBar}>
            <ShieldPlus size={32} color="#C4C4CC" />
            <p>Covid-19</p>
          </Link>
        </>
      )}
      {props.isOpen ? <Divider /> : ""}
      {slug === "Entretenimento" ? (
        <>
          <Link className="AtiveLink" to="/topics/Entretenimento" onClick={props.CloseNavBar}>
            <FilmStrip size={32} color="white" />
            <p className="Ative">Entretenimento</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Entretenimento" onClick={props.CloseNavBar}>
            <FilmStrip size={32} color="#C4C4CC" />
            <p>Entretenimento</p>
          </Link>
        </>
      )}
      {slug === "Tecnologia" ? (
        <>
          <Link className="AtiveLink" to="/topics/Tecnologia" onClick={props.CloseNavBar}>
            <RocketLaunch size={32} color="white" />
            <p className="Ative">Tecnologia</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Tecnologia" onClick={props.CloseNavBar}>
            <RocketLaunch size={32} color="#C4C4CC" />
            <p>Tecnologia</p>
          </Link>
        </>
      )}
      {slug === "Negocio" ? (
        <>
          <Link className="AtiveLink" to="/topics/Negocio" onClick={props.CloseNavBar}>
            <Briefcase size={32} color="white" />
            <p className="Ative">Negócio</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Negocio" onClick={props.CloseNavBar}>
            <Briefcase size={32} color="#C4C4CC" />
            <p>Negócio</p>
          </Link>
        </>
      )}
      {slug === "Esportes" ? (
        <>
          <Link className="AtiveLink" to="/topics/Esportes" onClick={props.CloseNavBar}>
            <Bicycle size={32} color="white" />
            <p className="Ative">Esportes</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Esportes" onClick={props.CloseNavBar}>
            <Bicycle size={32} color="#C4C4CC" />
            <p>Esportes</p>
          </Link>
        </>
      )}
      {slug === "Saude" ? (
        <>
          <Link className="AtiveLink" to="/topics/Saude" onClick={props.CloseNavBar}>
            <FirstAid size={32} color="white" />
            <p className="Ative">Saúde</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Saude" onClick={props.CloseNavBar}>
            <FirstAid size={32} color="#C4C4CC" />
            <p>Saúde</p>
          </Link>
        </>
      )}
    </Container>
  );
}
