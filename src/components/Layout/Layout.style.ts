import styled from "styled-components";

export const Section = styled.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 7rem) 0;

  @media (max-width: 768px) {
    width: min(100% - 2rem, 1200px);
  }
`;
