import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding-top: 130px;

  div{
    max-width: 100%;
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
    @media (max-width: 1000px) {
      font-size: 87.5%; // 14px
      width: 30rem;
    }
    @media (max-width: 600px) {
      width: 25rem;
    }
    @media (max-width: 450px) {
      width: 20rem;
    }
    @media (max-width: 290px) {
      width: 10rem;
    }
  }

  .Title {
    margin-top: 3.1rem;
  }
`;
