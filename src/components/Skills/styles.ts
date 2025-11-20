import styled from "styled-components";

export const SkillsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2vh 4rem;
  width: 80%;
`;

export const SkillTech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 30vw;
  gap: 16px;
`;

export const SkillTechContent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkillRankAndRepositories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const SkillRank = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const SkillRepositories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: lighter;
    font-weight: regular;
    color: var(--color-text);
  }
`;
