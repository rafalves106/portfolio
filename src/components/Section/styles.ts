import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 2rem 0;
  width: 100%;

  &.border {
    border: 1px solid var(--color-border);
    padding: 2.5rem;
    border-radius: 6rem;
  }

  &.glass-effect {
    background: var(--color-glass);
    border: 1px solid var(--color-glass-border);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 2rem;
`;
