import styled from "styled-components";
import GlassContainer from "../../components/GlassContainer";

export const CertificatesImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 12vw;
  padding: 0px 66px;
  overflow-x: auto;
`;

export const CertificatesImages = styled.img`
  height: 480px;
  width: auto;
  border-radius: 24px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
`;

export const CertificatesGlassContainer = styled(GlassContainer)`
  &.big {
    padding: 0px;
  }
`;

export const CertificatesContent = styled.div`
  width: 100%;
  padding: 66px 0px;
`;
