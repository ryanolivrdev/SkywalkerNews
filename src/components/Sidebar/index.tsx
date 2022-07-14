import { Container } from "./styles";
import { Divider } from "./divider";
import { Globe, ShieldPlus, FilmStrip, RocketLaunch, Briefcase, Bicycle, FirstAid } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
  CloseNavBar: any;
}

export function Sidebar(props: SideBarProps) {
  let { slug } = useParams<{ slug: string }>();

  slug = slug?.toLowerCase()

  function LinkReload(){
    props.CloseNavBar();
    //preventDefault();
    //window.location.reload();
  }

  return (
    <Container isOpen={props.isOpen}>
      {slug === "Principaisnoticias" || !slug ? (
        <>
          <Link className="AtiveLink" to="/topics/Principaisnoticias" onClick={props.CloseNavBar}>
            <Globe size={32} color="white" />
            <p className="Ative">Principais Notícias</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Principaisnoticias" onClick={LinkReload}>
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
          <Link to="/topics/Covid-19" onClick={LinkReload}>
            <ShieldPlus size={32} color="#C4C4CC" />
            <p>Covid-19</p>
          </Link>
        </>
      )}
      {props.isOpen ? <Divider /> : ""}
      {slug === "entretenimento" ? (
        <>
          <Link className="AtiveLink" to="/topics/Entretenimento" onClick={props.CloseNavBar}>
            <FilmStrip size={32} color="white" />
            <p className="Ative">Entretenimento</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Entretenimento" onClick={LinkReload}>
            <FilmStrip size={32} color="#C4C4CC" />
            <p>Entretenimento</p>
          </Link>
        </>
      )}
      {slug === "tecnologia" ? (
        <>
          <Link className="AtiveLink" to="/topics/Tecnologia" onClick={props.CloseNavBar}>
            <RocketLaunch size={32} color="white" />
            <p className="Ative">Tecnologia</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Tecnologia" onClick={LinkReload}>
            <RocketLaunch size={32} color="#C4C4CC" />
            <p>Tecnologia</p>
          </Link>
        </>
      )}
      {slug === "economia" ? (
        <>
          <Link className="AtiveLink" to="/topics/Economia" onClick={props.CloseNavBar}>
            <Briefcase size={32} color="white" />
            <p className="Ative">Economia</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Economia" onClick={LinkReload}>
            <Briefcase size={32} color="#C4C4CC" />
            <p>Economia</p>
          </Link>
        </>
      )}
      {slug === "esporte" ? (
        <>
          <Link className="AtiveLink" to="/topics/Esportivo" onClick={props.CloseNavBar}>
            <Bicycle size={32} color="white" />
            <p className="Ative">Esportes</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Esportivo" onClick={LinkReload}>
            <Bicycle size={32} color="#C4C4CC" />
            <p>Esportes</p>
          </Link>
        </>
      )}
      {slug === "saude" ? (
        <>
          <Link className="AtiveLink" to="/topics/Saude" onClick={props.CloseNavBar}>
            <FirstAid size={32} color="white" />
            <p className="Ative">Saúde</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/Saude" onClick={LinkReload} >
            <FirstAid size={32} color="#C4C4CC" />
            <p>Saúde</p>
          </Link>
        </>
      )}
    </Container>
  );
}
function preventDefault() {
  throw new Error("Function not implemented.");
}

