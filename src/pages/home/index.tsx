import { Outlet, useLocation, useParams } from "react-router-dom";
import { Container, TextField } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Greetings } from "../../components/Greetings";
import { News } from "../../components/News";
import { Footer } from "../../components/Footer";

export function Home() {
  let { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <Container>
        <TextField>
          <Greetings />
          <Outlet />
        </TextField>
        <div>
          <News topicSlug={pathname.slice(8)} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
