import styled from "styled-components";
import { PrimaryText } from "../../components/Texts/styles";

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
