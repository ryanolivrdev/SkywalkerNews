import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100vw;

  justify-content: center;
  align-items: center;

  padding: 2.2rem;
  gap: 0.7rem;

  a {
    color: var(--text-secondary);
  }
  @media (max-width: 430px) {
    font-size: 90%;
  }
  @media (max-width: 400px) {
    a {
      width: 15ch;
    }
    p {
      width: 12ch;
    }
    /* padding-top: 2.2rem;
    font-size: 80%; */
  }
`;
//13
