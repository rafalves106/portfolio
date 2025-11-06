import styled from "styled-components";

export const LogosContainer = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  align-items: center;
  justify-items: center;

  gap: 32px;
`;
