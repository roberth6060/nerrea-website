import styled from "styled-components";
import { Section } from "../../components/Layout/Layout.style";

export const AdministrativePage = styled.div`
  overflow: hidden;
`;

export const SupportSection = styled(Section)`
  background-color: var(--color-surface);
`;

export const SectionHeader = styled.header`
  max-width: 680px;
`;

export const SectionEyebrow = styled.h2`
  margin: 0 0 0.75rem;
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
