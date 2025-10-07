import styled from "styled-components";

export const Icon = styled.img`
  &.big {
    width: 200px;
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

export const Container = styled.div`
  &.hidden {
    display: none;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 2vh;
`;

export const PageContent = styled.div`
  padding: 51px 51px;
  border-radius: 112px;
`;
