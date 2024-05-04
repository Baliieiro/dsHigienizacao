import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    background-color: var(--background-color);
    position: fixed;
    height: 100%;
    top: 0px;
    right: 0px;
    width: 300px;
    padding: 3rem 2rem;
    right: ${(props) => (props.$sidebar ? "0" : "-100%")};
    animation: showSidebar 0.4s;

    > svg {
      position: fixed;
      color: white;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(34, 51, 59, 0.7);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    align-items: center;
    justify-content: center;
    padding: 25% 20%;
    > svg {
      position: fixed;
      top: 2rem;
      right: 2rem;
      color: #fff;
      font-size: 40px;
    }
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-weight: bold;
    gap: 2rem;
    height: auto;
  }

  @media screen and (max-width: 425px) {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;
