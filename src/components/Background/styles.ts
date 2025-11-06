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

  transition: width 1s ease-in-out, height 1s ease-in-out,
    transform 1s ease-in-out;

  top: 0;
  left: 0;

  &.menu {
    width: 540px;
    height: 540px;
    transform: translate(78vw, -10vh);
  }

  &.about_me {
    width: 380px;
    height: 380px;
    transform: translate(20vw, -15vh);
  }

  &.certificates {
    width: 220px;
    height: 220px;
    transform: translate(10vw, calc(100vh - 5vh - 220px));
  }

  &.techs {
    width: 540px;
    height: 540px;
    transform: translate(-15vw, calc(100vh - 540px));
  }

  &.skills {
    width: 540px;
    height: 540px;
    transform: translate(10vw, -35vh);
  }
`;

export const BlueElipse = styled.div`
  border-radius: 50%;
  position: absolute;
  background: var(--color-blue-elipse);

  transition: width 1s ease-in-out, height 1s ease-in-out,
    transform 1s ease-in-out;

  top: 0;
  left: 0;

  &.menu {
    width: 380px;
    height: 380px;
    transform: translate(8vw, 5vh);
  }

  &.about_me {
    width: 540px;
    height: 540px;
    transform: translate(70vw, 65vh);
  }

  &.certificates {
    width: 380px;
    height: 380px;
    transform: translate(85vw, 8vh);
  }

  &.techs {
    width: 220px;
    height: 220px;
    transform: translate(calc(60vw - 220px), calc(100vh - 10vh - 220px));
  }

  &.skills {
    width: 380px;
    height: 380px;
    transform: translate(calc(90vw - 380px), calc(100vh - 380px));
  }
`;

export const GreenElipse = styled.div`
  border-radius: 50%;
  position: absolute;
  background: var(--color-green-elipse);

  transition: width 1s ease-in-out, height 1s ease-in-out,
    transform 1s ease-in-out;

  top: 0;
  left: 0;

  &.menu {
    width: 220px;
    height: 220px;
    transform: translate(45vw, calc(90vh - 220px));
  }

  &.about_me {
    width: 220px;
    height: 220px;
    transform: translate(calc(90vw - 220px), 8vh);
  }

  &.certificates {
    width: 540px;
    height: 540px;
    transform: translate(55vw, 60vh);
  }

  &.techs {
    width: 380px;
    height: 380px;
    transform: translate(calc(95vw - 380px), 25vh);
  }

  &.skills {
    width: 220px;
    height: 220px;
    transform: translate(20vw, calc(98vh - 220px));
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
