import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: space-between;

  background-color: var(--articleColor);
  border: 1px solid var(--articleColorBorder);
  border-radius: 0.625rem;

  padding: 0.6875rem 1.3rem;
  margin: 2.2rem 0 0 0;

  img {
    max-width: 8.375rem;
    height: 9.625rem;
    border-radius: 0.625rem;
  }

  @media screen and (max-width: 600px) {
    img {
      height: auto;
    }
    min-height: 156px;
  }

  @media screen and (max-width: 500px) {
    margin: 2.2rem 1.2rem 0 1.2rem;
    gap: 1rem;
  }

  @media screen and (max-width: 400px) {
    gap: 1.2rem;
  }

  @media screen and (max-width: 334px) {
    img {
      width: 0;
    }
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    max-width: 50ch;
    font-size: 1rem;
  }

  .title{
    text-decoration: none;
  }
  a {
    color: var(--linkColor);
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    h2 {
      max-width: 35ch;
      font-size: 95%;
    }

    a {
      font-size: 87%;
    }

    p {
      font-size: 90%;
    }
  }

  @media screen and (max-width: 400px) {
    gap: 1rem;
  }
`;
