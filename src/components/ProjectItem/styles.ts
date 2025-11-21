import styled from "styled-components";
import { SecondaryText } from "../Texts/styles";

export const ProjectItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ProjectTechs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  & img {
    width: 24px;
    height: auto;
  }
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
  z-index: 10;

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
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  &:hover ${ProjectThumbnailLinks} {
    bottom: -50px;
    right: -50px;
  }
`;

export const ProjectThumbnailCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectThumbnailContainer}:hover & {
    transform: scale(1.03);
  }
`;

export const ProjectDescriptionContainer = styled.div`
  width: 100%;

  & ${SecondaryText} {
    text-align: left;
    font-size: 0.95rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
  }
`;
