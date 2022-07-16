import { Container, TextField } from "./styles";
import Skeleton from "@mui/material/Skeleton";
import { useContext } from "react";
import ThemeContext from "../../styles/themes/context";

export function Loading() {
  const { theme } = useContext(ThemeContext);
  let colors = theme.colors.skeletonColor;

  return (
    <Container>
      <TextField>
        <p>
          <Skeleton
            animation="wave"
            height={30}
            width={100}
            sx={{ bgcolor: { colors } }}
          />
        </p>
        <h2>
          <Skeleton
            animation="wave"
            height={80}
            width={300}
            sx={{ bgcolor: { colors } }}
          />
        </h2>
        <a>
          <Skeleton
            animation="wave"
            height={30}
            width={100}
            sx={{ bgcolor: { colors } }}
          />
        </a>
        <div>
          <p>
            <Skeleton
              animation="wave"
              height={25}
              width={65}
              sx={{ bgcolor: { colors } }}
            />
          </p>
        </div>
      </TextField>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={134}
        height={165}
        sx={{ bgcolor: { colors } }}
      />
    </Container>
  );
}
