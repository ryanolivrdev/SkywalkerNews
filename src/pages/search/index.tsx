import { useParams } from "react-router-dom";
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
          <News topicSlug={slug} />
        </div>
      </Container>
    </>
  );
}
