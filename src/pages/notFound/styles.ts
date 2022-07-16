import filmGrain from "../../assets/film_grain.png";
import whiteGain from "../../assets/white_grain.png";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  background-image: url(${whiteGain}), url(${filmGrain});
  background-color: #000;

  .notFound {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #E1E1E6;
      font-size: 8rem;
    }

    p {
      color: #E1E1E6;
    }
  }

  .references {
    h2 {
      color: var(--logoSpanColor);
      @media (max-width: 1080px) {
        font-size: 16px;
      }

      @media (max-width: 300px) {
        text-align: center;
        font-size: 14px;

        margin: auto;
      }
    }
  }

  .textField {
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
      margin-bottom: 1.5rem;
    }

    a {
      color: #8D8D99;
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
`;
