import { api } from "../../services/api"
import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"

//api.get("/top-headlines?country=br&pageSize=5")
//.then(({ data }) => console.log(data))
//.catch(error => console.error(error));

export function Home() {

  return (
    <>
    <Navbar />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </>
  )
}