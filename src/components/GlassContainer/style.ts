import styled from "styled-components";
import { ItemPrimaryTitle } from "../Texts/styles";

export const Container = styled.div`
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 56px;

  &.small {
    width: 280px;
    height: 280px;

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

  &.logo {
    overflow: hidden;
    width: 200px;
    height: 200px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

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
