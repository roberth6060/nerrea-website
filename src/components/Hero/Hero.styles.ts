import styled from "styled-components";

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-right: 0.75rem;
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    background: var(--color-primary);
    color: #ffffff;
    font-weight: 700;
  }
`;

export const HeroPicture = styled.picture`
  display: block;
  width: 100%;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;