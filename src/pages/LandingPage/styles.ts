import styled from "styled-components";
import { PrimaryText } from "../../components/Texts/styles";

// Menu Section Styles
export const MenuSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 4rem;
  width: 100%;
  padding: 2.5rem;
`;

// About Section Styles
export const AboutSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  margin-bottom: 38px;

  ${PrimaryText} {
    line-height: 160%;
    letter-spacing: 1px;

    span {
      font-size: 38px;
      font-weight: 300;
    }
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${PrimaryText} {
    line-height: 160%;
    letter-spacing: 1px;

    span {
      font-size: 32px;
      font-weight: 300;
    }
  }
`;

// Certificate Section Styles
export const CertificateSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 4rem;
`;

export const CertificatesImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 12vw;
  padding: 0px 66px;
  overflow-x: auto;
  padding-bottom: 24px;
`;

export const CertificatesImages = styled.img`
  height: 480px;
  width: auto;
  border-radius: 24px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
`;

export const CertificatesContent = styled.div`
  width: 100%;
  padding: 66px 0px;
`;

// Techs Sections Styles
export const TechsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-border);
  padding: 6rem;
  border-radius: 6rem;
`;

export const LogosContainer = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 4rem;
  column-gap: 4rem;
`;

// Skills Section Styles
export const SkillsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 4rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FolderTitle = styled.span`
  font-weight: 500;
  color: var(--color-text);
  text-align: center;
  transition: top 0.3s ease;
  cursor: pointer;
  transition: visibility 0.3s ease, opacity 0.3s ease, max-height 0.3s ease;
`;

export const Folder = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const FoldersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  // Titulo dentro da pasta
  ${FolderTitle} {
    font-size: 0.9rem;
    position: absolute;
    top: 3rem;
    left: 1rem;
    width: 4rem;
    visibility: visible;
    opacity: 1;
    max-height: none;
    transition: visibility 0.3s ease, opacity 0.3s ease, max-height 0.3s ease;
  }

  &.is-active {
    max-width: 14rem;
    width: 100%;
    border-radius: 8rem;
    gap: 0.5rem;

    // Titulo fora da pasta
    ${FolderTitle} {
      position: unset;
      top: unset;
      left: unset;
      width: unset;
      font-size: 1.4rem;
      visibility: visible;
    }
  }
`;

// Projects Section Styles
export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-border);
  padding: 6rem;
  border-radius: 6rem;
`;
