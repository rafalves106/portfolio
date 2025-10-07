import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const OrangeElipse = styled.div`
  border-radius: 50%;
  position: absolute;
  background: var(--color-orange-elipse);
  transition: all 0.5s ease-in-out;

  &.menu {
    width: 540px;
    height: 540px;
    top: -5vh;
    right: -10vw;
  }

  &.about_me {
    width: 380px;
    height: 380px;
    top: -20vh;
    left: 20vw;
  }

  &.certificates {
    width: 220px;
    height: 220px;
    bottom: 5vh;
    left: 10vw;
  }

  &.techs {
    width: 540px;
    height: 540px;
    bottom: 0vh;
    left: -15vw;
  }
`;

export const BlueElipse = styled.div`
  border-radius: 50%;
  position: absolute;
  background: var(--color-blue-elipse);
  transition: all 0.5s ease-in-out;

  &.menu {
    width: 380px;
    height: 380px;
    top: 5vh;
    left: 5vw;
  }

  &.about_me {
    width: 540px;
    height: 540px;
    bottom: -25vh;
    right: -5vw;
  }

  &.certificates {
    width: 380px;
    height: 380px;
    top: 8vh;
    right: -8vw;
  }

  &.techs {
    width: 220px;
    height: 220px;
    bottom: -10vh;
    right: 40vw;
  }
`;

export const GreenElipse = styled.div`
  border-radius: 50%;
  position: absolute;
  background: var(--color-green-elipse);
  transition: all 0.5s ease-in-out;

  &.menu {
    width: 220px;
    height: 220px;
    bottom: 10vh;
    left: 45vw;
  }

  &.about_me {
    width: 220px;
    height: 220px;
    top: 8vh;
    right: 10vw;
  }

  &.certificates {
    width: 540px;
    height: 540px;
    bottom: -25vh;
    right: 10vw;
  }

  &.techs {
    width: 380px;
    height: 380px;
    top: 25vh;
    right: 5vw;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 93vw;
  width: 100%;
  margin-top: 5vh;
`;
