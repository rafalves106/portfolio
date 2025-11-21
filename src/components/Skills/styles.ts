import styled from "styled-components";

export const SkillsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 768px) {
    gap: 1.5rem;
    justify-content: flex-start;
  }
`;

export const SkillTech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;

  flex: 1 1 24rem;
  max-width: 35rem;
  min-width: 280px;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid transparent;

  &:hover {
    border-color: var(--color-border);
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }
`;

export const SkillTechContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkillRankAndRepositories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const SkillRank = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillRepositories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-text);
    opacity: 0.8;
  }
`;
