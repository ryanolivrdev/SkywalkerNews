import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, TextField } from "./styles";
import { Loading } from "../Loading";
import Logo from "../../assets/logo.png";

interface apiResponseProps {
  image: any;
  url: string | undefined;
  provider: any;
  name: string;
  datePublished: string;
}

interface TopicProps {
  topicSlug: string;
}

export function News(props: TopicProps) {
  const [news, setNews] = useState<apiResponseProps[]>();

  useEffect(() => {
    api
      .get("/", {
        params: {
          textFormat: "Raw",
          safeSearch: "Off",
          q: `${props.topicSlug}`,
          freshness: "Day",
          count: "20",
        },
      })
      .then(({ data }) => setNews(data.value));
  }, [props.topicSlug]);

  return (
    <>
      {!news && (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      )}

      {news?.map((news) => {
        setTimeout(() => {}, 1000);

        return (
          <Container key={news.name}>
            <TextField>
              <p>{news.provider[0].name}</p>
              <h2>{news.name}</h2>
              <a href={news.url} target="_blank">
                Saiba Mais
              </a>
              <div>
                <p>{news.datePublished.slice(11, 16)}</p>
              </div>
            </TextField>
            <img
              src={
                news.image == undefined ? Logo : news.image.thumbnail.contentUrl
              }
            />
          </Container>
        );
      })}
    </>
  );
}
