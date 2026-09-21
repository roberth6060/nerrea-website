import styled from "styled-components";

export const HomePageContainer = styled.div`
  overflow: hidden;
`;

export const Section = styled.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 7rem) 0;
`;

export const HeroSection = styled(Section)`
  display: grid;
`;
