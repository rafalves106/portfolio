import styled from "styled-components";

import folderIcon from "../../assets/icons/folder.png";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5vh 15vw;
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 200px;
  height: 200px;
  padding-top: 48px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  background-image: url(${folderIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

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
