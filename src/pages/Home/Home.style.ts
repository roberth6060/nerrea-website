import styled from "styled-components";
import { Section } from "../../components/Layout/Layout.style";

export const TrustSection = styled.section`
  width: 100%;
  background-color: var(--color-surface);
`;

export const TrustContent = styled(Section)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: min(100% - 2rem, 1200px);
  }
`;

export const TrustList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;

  li {
    padding: 1rem 1.25rem;
    border-left: 3px solid var(--color-primary);
    background-color: var(--color-background);
    border-radius: 0.5rem;
    font-weight: 700;
  }

  span {
    color: green;
    font-weight: 800;
  }
`;
