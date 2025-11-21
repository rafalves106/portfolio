import styled, { css, keyframes } from "styled-components";
import { ItemPrimaryTitle, PrimaryText } from "../components/Texts/styles";

const GlassEffect = css`
  background: var(--color-glass, rgba(255, 255, 255, 0.1));
  border: 1px solid var(--color-glass-border, rgba(255, 255, 255, 0.2));
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
`;

const BaseSectionStyle = css`
  width: 100%;
  padding: 4rem;
  border-radius: 3rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 2rem;
    margin-bottom: 2rem;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto 0;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 2rem auto;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${fadeInUp} 0.8s ease-out forwards;
  opacity: 0;
`;

export const Icon = styled.img``;

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.hidden {
    display: none;
  }

  &.glass-effect {
    ${GlassEffect}
  }

  &.small {
    width: 12rem;
    height: 12rem;
    border-radius: 2.5rem;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;

    ${Icon} {
      width: 6rem;
      height: auto;
      transition: width 0.3s ease;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 24px rgba(152, 151, 151, 0.2);
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      aspect-ratio: 1 / 1;
      border-radius: 1.5rem;
      gap: 0.5rem;

      ${Icon} {
        width: 50%;
        max-width: 4rem;
      }
    }
  }

  &.image {
    overflow: hidden;
    width: 100%;
    border-radius: 24px;
    padding: 0;
    flex-shrink: 0;

    max-width: 25rem;
    aspect-ratio: 1/1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      aspect-ratio: 16/10;
      margin-bottom: 1rem;
    }
  }

  &.logo {
    width: 10rem;
    height: 10rem;
    padding: 1rem;
    border-radius: 2rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 80px;
      width: auto;
      transition: transform 0.3s ease-in-out;
    }

    ${ItemPrimaryTitle} {
      visibility: hidden;
      opacity: 0;
      height: 0;
      margin-top: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      img {
        transform: translateY(-10px);
      }
      ${ItemPrimaryTitle} {
        visibility: visible;
        opacity: 1;
        height: auto;
        margin-top: 0.5rem;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      border-radius: 1.5rem;
      padding: 0.5rem;

      img {
        height: 50%;
        width: auto;
        transform: none !important;
      }

      ${ItemPrimaryTitle} {
        font-size: 0.8rem;
      }
    }
  }
`;

export const MenuSection = styled.section`
  ${BaseSectionStyle}

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem;

    align-items: stretch;
  }
`;

export const AboutSection = styled.section`
  ${BaseSectionStyle}
  background: var(--color-glass, #1c1c1c);

  ${PrimaryText} {
    line-height: 160%;
    letter-spacing: 0.5px;

    span {
      font-size: 3rem;
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    ${PrimaryText} {
      font-size: 1rem;

      span {
        font-size: 1.5rem;
      }
    }
  }
`;

export const AboutImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1.5rem;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  width: 100%;

  @media (max-width: 900px) {
    text-align: left;
  }
`;

export const CertificateSection = styled.section`
  ${BaseSectionStyle}
  ${GlassEffect}
  padding: 0;
  overflow: hidden;
`;

export const CertificatesImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 73vh;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CertificatesImages = styled.img`
  height: 400px;
  width: auto;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

export const TechsSection = styled.section`
  ${BaseSectionStyle}
`;

export const LogosContainer = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const SkillsSection = styled.section`
  ${BaseSectionStyle}
  ${GlassEffect}
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-items: center;
  }
`;

export const FolderTitle = styled.span`
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
  font-size: 0.8rem;
  z-index: 10;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

export const Folder = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const FoldersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  ${FolderTitle} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    margin-top: 0.5rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  &.is-active {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
    width: 6rem;
    height: 6rem;
    border-radius: 50%;

    ${Folder} {
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
    }
  }
`;

export const ProjectsSection = styled.section`
  ${BaseSectionStyle}
  ${GlassEffect}
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    overflow: hidden;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-height: 65vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;

  p {
    margin: 0;
  }

  span {
    color: var(--color-text);
    font-weight: 500;
  }
`;

export const ScrollToTopButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export const LanguageSwitchButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;

  color: var(--color-text);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  span {
    font-size: 1.2rem;
  }
`;
