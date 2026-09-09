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
  align-items: center;
  justify-content: space-between;
`;

export const NavbarBrand = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 140px;
  }
`;

export const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;

  li {
    margin: 0;
  }

  a {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    color: #374151;
    font-weight: 500;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  a:hover {
    background-color: #0074e8;
    color: #ffffff;
  }
`;
