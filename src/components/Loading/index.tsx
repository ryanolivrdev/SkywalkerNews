import { Container, TextField } from "./styles";
import Skeleton from "@mui/material/Skeleton";

export function Loading() {
  return (
    <Container>
      <TextField>
        <p>
          <Skeleton animation="wave" height={30} width={100} />
        </p>
        <h2>
          <Skeleton animation="wave" height={80} width={300} />
        </h2>
        <a>
          <Skeleton animation="wave" height={30} width={100} />
        </a>
        <div>
          <p>
            <Skeleton animation="wave" height={25} width={65} />
          </p>
        </div>
      </TextField>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={134}
        height={165}
      />
    </Container>
  );
}