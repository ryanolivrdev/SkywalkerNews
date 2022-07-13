import { api } from "../../services/api";
import { Container, TextField } from "./styles";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Navbar } from "../../components/Navbar";
import { News } from "../../components/News";
import { Link, useParams } from "react-router-dom";
import { ReactElement, JSXElementConstructor, ReactFragment } from "react";

//api.get("/top-headlines?country=br&pageSize=5")
//.then(({ data }) => console.log(data))
//.catch(error => console.error(error));

let hours: string
let getHours = format(new Date(), "aaa",);
if (getHours === "am"){
  hours = "Bom dia!"
}
if (getHours === "pm"){
  hours = "Bom Noite!"
}

let today = format(new Date(), "eeee',' d 'de' MMMM aaa", { locale: ptBR });



export function Home() {
  let { slug } = useParams<{ slug: string }>();

  if (!slug) {
    slug = "Principais Notícias";
  }
  if(slug === "Principaisnoticias"){
    slug = "Principais Notícias";
  }
  if(slug === "Negocio"){
    slug = "Negócio"
  }
  if (slug === "Saude"){
    slug = "Saúde";
  }

  return (
    <>
      <Navbar />
      <Container>
        <TextField>
          <div>
            <h1>{hours}</h1>
            <p>{today}</p>
          </div>

          {slug == "Covid-19" ? (
            <div className="alertBox">
              <Link to="/topics/Principaisnoticias">
                <span>Leia as principais Notícias do dia:</span> Acompanhe toda a
                  cobertura de todos os jornais
              </Link>
            </div>
          ) : (
            <>
              <div className="alertBox">
                <Link to="/topics/Covid-19">
                  <span>Notícias sobre a COVID-19:</span> Acompanhe toda a
                  cobertura sobre o coronavírus (COVID-19)
                </Link>
              </div>
            </>
          )}

          <h1 className="Title">{slug}</h1>

          <News />
        </TextField>
      </Container>
    </>
  );
}
