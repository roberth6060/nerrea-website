import styled from "styled-components";

export const PageContainer = styled.div`
  overflow: hidden;
`;

export const Section = styled.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 7rem) 0;

  @media (max-width: 768px) {
    width: min(100% - 2rem, 1200px);
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

export const SectionHeader = styled.div`
  max-width: 620px;
  margin-bottom: 2.5rem;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  article {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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

export const PrimaryButton = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid rgb(0 97 198 / 35%);
    outline-offset: 3px;
  }
`;

export const ArrowLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;

  &::after {
    display: grid;
    width: 2rem;
    aspect-ratio: 1;
    place-items: center;
    border-radius: 50%;
    background-color: #238657;
    color: #ffffff;
    content: "→";
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  &:hover::after {
    background-color: #176b43;
    transform: translateX(3px);
  }

  &:focus-visible {
    outline: 3px solid rgb(35 134 87 / 30%);
    outline-offset: 4px;
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
`;
