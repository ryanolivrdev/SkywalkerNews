import styled from "styled-components";

interface SideBarProps {
  isOpen: boolean;
}

export const Container = styled.aside<SideBarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  z-index: 998;
  height: 100%;

  padding-top: 56px;
  gap: 1.688rem;

  width: ${({ isOpen }) => (isOpen ? "252px" : "0")};

  border-right: 1px solid var(--navbarBorderColor);
  background-color: var(--backgroundBody);

  a {
    display: flex;
    align-items: center;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0")};

    padding-left: 1.875rem;
    gap: 1rem;

    border: none;
    border-radius: 0 0.625rem 0.625rem 0;

    background-color: transparent;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;

    p {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }
  }

  a:hover {
    color: var(--textSidebarColor);
    background-color: var(--buttonColorHover);

    p {
      color: var(--textSidebarColor);
    }
  }

  .AtiveLink {
    background-color: var(--buttonColor);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    color: var(--textSidebarColor);

    p {
      color: var(--textSidebarColor);
    }
  }
`;
