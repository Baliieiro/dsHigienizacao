import styled from "styled-components";

export const Container = styled.header`
  height: 17vh;
  background-color: var(--background-color);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  align-items: center;
`;
export const ContainerImage = styled.div`
  display: flex;
  img {
    width: 60px;
    border-radius: 50%;
  }
`;
export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const ContainerLinks = styled.div`
  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
