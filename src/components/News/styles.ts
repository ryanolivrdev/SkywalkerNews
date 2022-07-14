import { api } from './../../services/api';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: var(--elements-secondary);
  border-radius: 0.625rem;
  padding-top: 0.6875rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  padding-bottom: 0.6875rem;
  margin-top: 2.2rem;

  img {
    width: 134px;
    height: 154px;
    border-radius: 10px;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    max-width: 50ch;
  }

  a {
    color: var(--link-font);
    text-decoration: underline;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  gap: 1.5rem;
`