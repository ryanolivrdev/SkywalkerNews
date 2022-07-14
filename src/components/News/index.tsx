import { useState } from "react";
import { api } from "../../services/api";
import { Container, TextField, SkeletonContainer } from "./styles";
import Skeleton from "@mui/material/Skeleton";
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
  let slug: string;
  if (props.topicSlug.toLowerCase() === "principais notícias" || "") {
    slug = "";
  } else {
    slug = props.topicSlug;
  }

  api
    .get("/", {
      params: {
        textFormat: "Raw",
        safeSearch: "Off",
        q: `${slug}`,
        freshness: "Day",
        count: "20",
      },
    })
    .then(({ data }) => setNews(data.value))

  return (
    <>
      {!news && (
        <SkeletonContainer>
          <Skeleton
            sx={{ bgcolor: "white", opacity: 0.5 }}
            variant="rectangular"
            width={664}
            height={176}
          />
          <Skeleton
            sx={{ bgcolor: "white", opacity: 0.5 }}
            variant="rectangular"
            width={664}
            height={176}
          />
        </SkeletonContainer>
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

<Container>
  <TextField>
    <p>Globo</p>
    <h2>Nasa divulga novas imagens obtidas pelo telescópio James Webb</h2>
    <a href="">Saiba Mais</a>
    <div>
      <p>12:55</p>
    </div>
  </TextField>
  <img src="https://picsum.photos/200" alt="" />
</Container>;
