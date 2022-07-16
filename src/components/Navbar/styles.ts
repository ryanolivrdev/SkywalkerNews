import styled from "styled-components";
import MagnifyingGlass from "../../assets/MagnifyingGlass.svg";

export const Container = styled.nav`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 72px;
  top: 0;
  overflow: hidden;
  z-index: 999;

  padding: 0 25px;

  background-color: var(--navbarColor);
  border-bottom: 1px solid var(--navbarBorderColor);

  div {
    display: flex;
    align-items: center;

    gap: 1rem;

    a {
      font-size: 1.4rem;

      h1 {
        color: var(--logoColor);

        @media (max-width: 700px) {
          font-size: 0;
        }
      }

      span {
        color: var(--logoSpanColor);
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
    background-image: url(${MagnifyingGlass});

    background-repeat: no-repeat;
    background-position: 0.75rem;

    padding-left: 2.875rem;
    margin-left: -10rem;

    width: 30rem;
    height: 3rem;

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
