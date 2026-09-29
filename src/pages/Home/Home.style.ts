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
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.7rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    background-color: var(--color-background);
    color: var(--color-primary);
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.25rem;
    transition:
      color 0.2s ease,
      gap 0.2s ease;

    &::after {
      content: "→";
      text-decoration: none;
    }

    &:hover {
      gap: 0.75rem;
      border-color: var(--color-primary);
      background-color: var(--color-primary);
      color: #ffffff;
    }

    &:focus-visible {
      outline: 3px solid rgb(0 97 198 / 30%);
      outline-offset: 4px;
    }
  }

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

export const CallToActionSection = styled(Section)`
  text-align: center;

  h2 {
    margin: 0 0 1rem;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
  }

  p {
    max-width: 520px;
    margin: 0 auto 1.5rem;
    color: var(--color-muted);
  }

  a {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    background-color: var(--color-primary);
    color: #ffffff;
    font-weight: 700;
  }
`;
