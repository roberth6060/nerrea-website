import styled from "styled-components";

export const ServiceCardContainer = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 0.09fr) minmax(0, 1.1fr);
  width: min(100% - 2rem, 920px);
  margin: 2rem auto;
  overflow: hidden;
  border: 1px solid (--color-border);
  background-color: var(--color-surface);
  border-radius: 14px;
  box-shadow: 0 18px 45px rgb(17 24 39 / 10%);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    width: min(100% - 2rem, 480px);
  }
`;

export const ServiceCardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
