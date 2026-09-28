import styled from "styled-components";

export const HomePageContainer = styled.div`
  overflow: hidden;
`;

export const Section = styled.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 768px) {
    width: min(100% - 2rem, 1200px);
  }
`;

export const SectionHeader = styled.div`
  max-width: 620px;
  margin-bottom: 2.5rem;
`;
export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export const SectionEyebrow = styled.h2`
  margin: 0 0 0.75rem;
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  color: var(--color-muted);
  font-size: 1.125rem;
  line-height: 1.6;
`;

export const Divider = styled.div`
  width: 150px;
  height: 2px;
  margin: 0 0 1rem;

  background: linear-gradient(
    90deg,
    var(--color-primary) 0%,
    var(--color-primary-hover) 100%
  );
`;
