import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding-top: 130px;

  div {
    max-width: 100%;
  }
  @media (max-width: 446px) {
    padding-top: 110px;
  }
  @media (max-width: 416px) {
    padding-top: 80px;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  .alertBox {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.1rem;

    padding: 1rem;

    background-color: var(--elements-secondary);
    border-radius: 0.625rem;

    span {
      color: var(--link-font);
    }
  }

  .Title {
    margin-top: 3.1rem;
  }

  @media (max-width: 600px) {
    font-size: 90%;

    .alertBox {
      margin: 2.1rem auto 0 auto;
      max-width: 450px;
    }
  }
  @media (max-width: 500px) {
    font-size: 85%;

    .alertBox {
      max-width: 400px;
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 80%;
  }
  @media screen and (max-width: 417px) {
    margin: 2.1rem 1.2rem 0 1.2rem;
  }
`;
