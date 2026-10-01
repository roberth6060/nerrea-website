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
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
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
