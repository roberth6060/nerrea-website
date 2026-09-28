import styled from "styled-components";

export const HomePageContainer = styled.div`
  overflow: hidden;
`;

export const Section = styled.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 7rem) 0;

  @media (max-width: 768px) {
    width: min(100% - 2rem, 1200px);
  }
`;

export const SectionHeader = styled.div;
export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
