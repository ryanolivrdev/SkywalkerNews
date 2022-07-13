import { Container } from "./styles";
import { Divider } from "./divider";
import { Globe, ShieldPlus, FilmStrip, RocketLaunch, Briefcase, Bicycle, FirstAid } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
}

export function Sidebar(props: SideBarProps) {
  const { slug } = useParams<{ slug: string }>();

  console.log(props.isOpen);

  return (
    <Container isOpen={props.isOpen}>
      {slug === "topstories" || !slug ? (
        <>
          <Link className="AtiveLink" to="/topstories">
            <Globe size={32} color="white" />
            <p className="Ative">Principais Notícias</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topstories">
            <Globe size={32} color="#C4C4CC" />
            <p>Principais Notícias</p>
          </Link>
        </>
      )}
      {slug === "covid-19" ? (
        <>
          <Link className="AtiveLink" to="/topics/covid-19">
            <ShieldPlus size={32} color="white" />
            <p className="Ative">Covid-19</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/covid-19">
            <ShieldPlus size={32} color="#C4C4CC" />
            <p>Covid-19</p>
          </Link>
        </>
      )}
      {props.isOpen ? <Divider /> : ""}
      {slug === "entertainment" ? (
        <>
          <Link className="AtiveLink" to="/topics/entertainment">
            <FilmStrip size={32} color="white" />
            <p className="Ative">Entretenimento</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/entertainment">
            <FilmStrip size={32} color="#C4C4CC" />
            <p>Entretenimento</p>
          </Link>
        </>
      )}
      {slug === "technology" ? (
        <>
          <Link className="AtiveLink" to="/topics/technology">
            <RocketLaunch size={32} color="white" />
            <p className="Ative">Tecnologia</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/technology">
            <RocketLaunch size={32} color="#C4C4CC" />
            <p>Tecnologia</p>
          </Link>
        </>
      )}
      {slug === "business" ? (
        <>
          <Link className="AtiveLink" to="/topics/business">
            <Briefcase size={32} color="white" />
            <p className="Ative">Negócio</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/business">
            <Briefcase size={32} color="#C4C4CC" />
            <p>Negócio</p>
          </Link>
        </>
      )}
      {slug === "sports" ? (
        <>
          <Link className="AtiveLink" to="/topics/sports">
            <Bicycle size={32} color="white" />
            <p className="Ative">Esportes</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/sports">
            <Bicycle size={32} color="#C4C4CC" />
            <p>Esportes</p>
          </Link>
        </>
      )}
      {slug === "health" ? (
        <>
          <Link className="AtiveLink" to="/topics/health">
            <FirstAid size={32} color="white" />
            <p className="Ative">Saúde</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="/topics/health">
            <FirstAid size={32} color="#C4C4CC" />
            <p>Saúde</p>
          </Link>
        </>
      )}
    </Container>
  );
}
