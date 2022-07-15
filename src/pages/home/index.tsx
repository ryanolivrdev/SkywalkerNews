import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Container, TextField } from "./styles";
import { Navbar } from "../../components/Navbar";
import { News } from "../../components/News";
import { Footer } from "../../components/Footer";

let greeting: string;
const getHours = new Date().getHours();
if (getHours < 12) {
  greeting = "Bom dia!";
}
if (getHours >= 12 && getHours <= 17) {
  greeting = "Boa Tarde!";
}
if (getHours >= 17 && getHours <= 24) {
  greeting = "Boa Noite!";
}
const today = format(new Date(), "d 'de' MMMM',' eeee'.'", { locale: ptBR });

export function Home() {
  let { slug } = useParams<{ slug: string }>();

  switch (slug) {
    case "Principaisnoticias":
      slug = "Principais Notícias";
      break;
    case undefined:
      slug = "Principais Notícias";
      break;
    case "Saude":
      slug = "Saúde";
      break;
  }

  return (
    <>
      <Navbar />
      <Container>
        <TextField>
          <div>
            <h1>{greeting}</h1>
            <p>{today}</p>
          </div>

          {slug == "Covid-19" ? (
            <div className="alertBox">
              <Link to="/topics/Principaisnoticias">
                <span>Leia as principais Notícias do dia:</span> Acompanhe toda
                a cobertura de todos os jornais
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

          <h1 className="Title">
            {slug.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
              letra.toUpperCase()
            )}
          </h1>
        </TextField>
        <div>
          <News topicSlug={slug.replace(/\s+/g, "-").toLowerCase()} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
