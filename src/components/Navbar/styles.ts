import styled from "styled-components";
import MagnifyingGlass from "../../assets/MagnifyingGlass.svg";

export const Container = styled.nav`
  display: flex;
  position: fixed;

  width: 100vw;
  height: 72px;
  top: 0;

  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  background-color: var(--elements);
  border-bottom: 1px solid var(--divider);

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      font-size: 1.4rem;
      h1 {
        color: var(--logo-secondary);
        @media (max-width: 700px) {
          font-size: 0;
        }
      }
      span {
        color: var(--logo-font);
      }
      @media (max-width: 1000px) {
        font-size: 87.5%;
      }
      @media (max-width: 900px) {
        margin-left: 1rem;
      }
    }
  }

  a:hover {
    background: none;
  }

  input {
    display: flex;
    background-image: ${(props) =>
      props.theme.title === "dark"
        ? `url("${MagnifyingGlass}")`
        : `url("${MagnifyingGlass}")`};
    background-repeat: no-repeat;
    background-position: 0.75rem;
    background-color: var(--divider);
    color: var(--title-font);
    padding-left: 2.875rem;
    margin-left: -10rem;

    width: 30rem;
    height: 3rem;

    border: 1px solid var(--elements-secondary);
    border-radius: 10px;

    transition: all 0.2s ease-in;

    @media (max-width: 900px) {
      margin-left: 0rem;
    }
    @media (max-width: 600px) {
      width: 20rem;
    }
    @media (max-width: 450px) {
      width: 15rem;
    }
    @media (max-width: 370px) {
      width: 10rem;
    }
    @media (max-width: 290px) {
      width: 5rem;
    }
  }
  input:hover {
    background-color: var(--text-font);
    color: var(--input-hover);
  }

  button {
    border: none;
    background-color: transparent;
  }

  .changeMode {
    @media (max-width: 900px) {
      margin-left: 1rem;
    }
  }
`;
