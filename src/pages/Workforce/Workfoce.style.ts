import styled from "styled-components";
import { Section } from "../../components/Layout/Layout.style";

export const ServiceHeader = styled.header`
  max-width: 700px;
  margin-bottom: 2.5rem;

  h2 {
    margin: 0 0 1rem;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
  }

  p {
    max-width: 620px;
    margin: 0;
    color: var(--color-muted);
    font-size: 1.125rem;
    line-height: 1.6;
  }
`;

export const ProcessBand = styled.section`
  width: 100%;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
`;

export const ProcessContent = styled(Section)`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.5fr);
  align-items: start;
  gap: clamp(2rem, 5vw, 5rem);

  > div:first-child h2 {
    margin: 0;
    font-size: clamp(2rem, 3vw, 2.75rem);
    line-height: 1.15;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ControlSection = styled(Section)`
  max-width: 850px;
  border-left: 4px solid #238657;
  padding-left: clamp(1.25rem, 4vw, 2.5rem);

  h2 {
    margin: 0 0 1rem;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
  }

  p {
    max-width: 680px;
    margin: 0;
    color: var(--color-muted);
    font-size: 1.125rem;
    line-height: 1.7;
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.75rem 1.25rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessStep = styled.div`
  padding-top: 1rem;
  border-top: 2px solid var(--color-border);

  span {
    color: var(--color-primary);
    font-size: 0.85rem;
    font-weight: 800;
  }

  h3 {
    margin: 0.75rem 0 0.5rem;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: var(--color-muted);
    line-height: 1.6;
  }
`;
