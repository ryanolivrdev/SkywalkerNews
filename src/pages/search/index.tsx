import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { News } from "../../components/News";
import { Container, TextField } from "./styles";

export function Search() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Error</div>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <TextField>
          <h1>Resultado</h1>
          <p>Para a pesquisa: {slug.replace(/-/g, " ")}</p>
        </TextField>
        <div>
          <News topicSlug={slug.replace(/\s+/g, "-").toLowerCase()} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
