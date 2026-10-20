import styled from "styled-components";
import { Section, ServiceGrid } from "../../components/Layout/Layout.style";

export const DigitalServiceGrid = styled(ServiceGrid)`
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const DigitalServiceCard = styled.article`
  display: flex;
  min-height: 260px;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-surface);

  > span {
    color: var(--color-primary);
    font-size: 0.85rem;
    font-weight: 800;
  }

  h3 {
    margin: 1rem 0 0.75rem;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  p {
    margin: 0 0 1rem;
    color: var(--color-muted);
    line-height: 1.6;
  }
`;

export const DigitalSupport = styled.section`
  width: 100%;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
`;

export const DigitalSupportContent = styled(Section)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);

  h2 {
    max-width: 560px;
    margin: 0;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
  }

  > p {
    max-width: 560px;
    margin: 0;
    color: var(--color-muted);
    font-size: 1.125rem;
    line-height: 1.7;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
