import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 1200px;
  border-bottom: 1px solid #e5e7eb;
  margin: 0 auto;
`;

export const NavbarContent = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarBrand = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 140px;
    height: auto;
    display: block;
  }
`;

export const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
`;
