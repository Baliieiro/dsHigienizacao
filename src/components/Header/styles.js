import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.header`
  height: 17vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  align-items: center;
  box-shadow: 0 0 20px 3px;

  @media screen and (min-width: 0px) and (max-width: 768px) {
    padding: 1rem 2rem;
  }

  > svg {
    color: #fff;
    @media screen and (max-width: 768px) {
      display: ${(props) => props.$active && "none"};
      /* display: block; */
      font-size: 40px;
    }

    @media screen and (min-width: 769px) {
      font-size: 60px;
      display: none;
    }
  }
`;
export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      width: 40px;
      height: 40px;
    }

    @media screen and (min-width: 769px) {
      width: 60px;
      height: 60px;
    }
  }
`;
export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Links = styled(Link)`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
