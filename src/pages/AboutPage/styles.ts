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

export const BestFriendImage = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;
