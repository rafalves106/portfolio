import styled from "styled-components";

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

  &::-webkit-scrollbar {
    visibility: hidden;
  }
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
