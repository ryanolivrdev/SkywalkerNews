import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: var(--articleColor);
  border: 1px solid var(--articleColorBorder);
  border-radius: 0.625rem;

  padding: 0.6875rem 1.3rem;
  margin: 2.2rem 0 0 0;
  gap: 1.2rem;

  @media screen and (max-width: 500px) {
    margin: 2.2rem 1.2rem 0 1.2rem;
    gap: 1rem;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
