import styled from "styled-components";
import { Section } from "../../components/Layout/Layout.style";

export const AdministrativePage = styled.div`
  overflow: hidden;
`;

export const SupportSection = styled.section`
  width: 100%;
  background-color: var(--color-surface);
`;

export const SupportContent = styled(Section)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 14px;
    object-fit: cover;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
    color: var(--color-primary);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
    transition: gap 0.2s ease;

    &::after {
      content: "→";
    }

    &:hover {
      gap: 0.75rem;
      color: var(--color-primary-hover);
    }

    &:focus-visible {
      outline: 3px solid rgb(0 97 198 / 30%);
      outline-offset: 4px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
