import styled from "styled-components";
import { SecondaryText } from "../Texts/styles";

export const ProjectItemContainer = styled.div`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const ProjectThumbnailLinks = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: -110px;
  right: -110px;
  background: var(--color-blue-elipse);
  transition: all 0.3s ease-in-out;

  & img {
    position: absolute;
    width: 20px;
    height: auto;
    cursor: pointer;

    &.top {
      top: 15px;
      left: 40px;
    }

    &.bottom {
      top: 40px;
      left: 15px;
    }

    &.middle {
      top: 30px;
      left: 30px;
    }
  }
`;

export const ProjectThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  width: 100%;
  height: auto;
  border-radius: 6px;
  overflow: hidden;
  position: relative;

  &:hover ${ProjectThumbnailLinks} {
    bottom: -50px;
    right: -50px;
  }
`;

export const ProjectThumbnailCover = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 15px;
  flex: 1;

  & ${SecondaryText} {
    text-align: justify;
  }
`;

export const ProjectDetailsTitleAndTechsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProjectDetailsTechsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  & img {
    width: 20px;
    height: auto;
  }
`;
