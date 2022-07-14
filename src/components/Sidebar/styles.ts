import styled from "styled-components";

interface SideBarProps {
  isOpen: boolean;
}

export const Container = styled.aside<SideBarProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  top: 72px;
  padding-top: 56px;
  align-items: center;
  width: ${({ isOpen }) => (isOpen ? "252px" : "0")};

  gap: 1.688rem;

  background-color: var(--background);

  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;

  a {
    display: flex;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0")};

    padding-left: 1.875rem;
    align-items: center;
    gap: 1rem;

    border: none;
    border-radius: 0 0.625rem 0.625rem 0;

    color: var(--text-font);
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    p {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }
  }

  a:hover {
    color: white;
    background-color: var(--button-hover);
    p {
      color: white;
    }
  }

  .AtiveLink {
    background-color: var(--button);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    color: white;
    p {
      color: white;
    }
  }
`;
