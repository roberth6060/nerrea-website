import styled from "styled-components";

export const ServiceCardContainer = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  width: min(100% - 2rem, 920px);
  margin: 2rem auto;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  border-radius: 14px;
  box-shadow: 0 18px 45px rgb(17 24 39 / 10%);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    width: min(100% - 2rem, 480px);
  }
`;

export const ServiceCardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;

  @media (max-width: 680px) {
    height: 220px;
    min-height: 0;
  }
`;

export const ServiceCardContent = styled.div`
  display: flex;
  padding: clamp(1.5rem, 4vw, 3rem);
  flex-direction: column;
  justify-content: center;
`;

export const ServiceCardTitle = styled.h2`
  margin-bottom: 0.75rem;
`;

export const ServiceCardDescription = styled.p`
  margin-bottom: 0.75rem;
`;

export const ServiceCardLink = styled.a`
  align-self: flex-start;
  background-color: var(--color-primary);
  color: #ffffff;
  padding: 0.7rem 1rem;
  border-radius: 1.2rem;
  font-weight: 700;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
  }
`;
