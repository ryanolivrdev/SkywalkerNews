import { api } from "../services/api"

//api.get("/top-headlines?country=br&pageSize=5")
//.then(({ data }) => console.log(data))
//.catch(error => console.error(error));

export function Home() {
  return <h1>Hello World!</h1>
}