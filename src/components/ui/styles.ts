import styled from "styled-components";
import { ItemPrimaryTitle, PagePrimaryTitle } from "../Texts/styles";

export const Icon = styled.img`
  &.big {
    width: 12rem;
    height: auto;
    cursor: pointer;
  }

  &.small {
    position: absolute;
    top: 27px;
    left: 27px;
    width: 54px;
    height: auto;
  }
`;

export const IconWithText = styled.div`
  position: absolute;
  top: 27px;
  left: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  ${Icon} {
    position: static;
    width: 54px;
    height: auto;
  }

  ${PagePrimaryTitle} {
    margin: 0;
  }
`;

export const StyledContainer = styled.div`
  position: relative;

  &.hidden {
    display: none;
  }

  // Estilos de tamanho

  &.small {
    width: 18rem;
    height: 18rem;
    border-radius: 3rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      transition: all 0.3s ease-in-out;

      box-shadow: 0 4px 24px rgba(152, 151, 151, 0.33);
    }
  }

  &.medium {
    width: 63vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.big {
    width: 93vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.image {
    overflow: hidden;
    max-width: 260px;
    width: 100%;
    max-height: 260px;
    height: 100%;

    border-radius: 24px;

    img {
      width: 260px;
    }
  }

  // Estilos de tipo

  &.glass-effect {
    background: var(--color-glass);
    border: 1px solid var(--color-glass-border);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }

  &.border {
    gap: 76px;
    border: 1px solid var(--color-border);
    padding: 51px 51px;
  }

  &.logo {
    overflow: hidden;
    width: 12rem;
    height: 12rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;

    img {
      height: 100px;
      transition: all 0.3s ease-in-out;
    }

    ${ItemPrimaryTitle} {
      visibility: hidden;
      opacity: 0;
      max-height: 0px;
      transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
    }

    &:hover {
      img {
        transform: translateY(-15px);
      }

      ${ItemPrimaryTitle} {
        visibility: visible;
        opacity: 1;
        max-height: 50px;
      }
    }
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 2vh;
`;

export const SectionContent = styled.div`
  padding: 51px 51px;
  border-radius: 56px;
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: rgba(255, 95, 87, 100);
  width: 18px;
  height: 18px;
  top: 2rem;
  right: 2rem;
  border: 1px solid rgba(255, 56, 60, 50);
  border-radius: 50%;
  box-shadow: 1px 1px 4px rgba(41, 41, 58, 0.23);
  cursor: pointer;
  font-weight: bold;
  z-index: 100;
`;
