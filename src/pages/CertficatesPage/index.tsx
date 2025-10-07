import {
  PagePrimaryTitle,
  PageSecondaryTitle,
} from "../../components/Texts/styles";
import { Container, Icon, PageHeader } from "../../components/ui/styles";

import certificatesIcon from "../../assets/icons/certificates.png";

import ebac_certificate_1 from "../../assets/images/certificates/ebac_1.webp";
import ebac_certificate_2 from "../../assets/images/certificates/ebac_2.webp";
import curso_em_video_1 from "../../assets/images/certificates/curso_em_video_1.webp";
import {
  CertificatesImagesContainer,
  CertificatesGlassContainer,
  CertificatesImages,
  CertificatesContent,
} from "./styles";

type Props = {
  abaAtiva: string;
  handleMudarAba: (aba: string) => void;
};

const CertificatesPage = (props: Props) => {
  return (
    <Container className={props.abaAtiva !== "certificates" ? "hidden" : ""}>
      <PageHeader>
        <PagePrimaryTitle>Certificates</PagePrimaryTitle>
        <PageSecondaryTitle>Certificados</PageSecondaryTitle>
      </PageHeader>

      <CertificatesGlassContainer containerSize="big">
        <CertificatesContent>
          <Icon className="small" src={certificatesIcon} alt="Certificates" />
          <CertificatesImagesContainer>
            <CertificatesImages
              src={ebac_certificate_2}
              alt="EBAC Certificate 2"
            />
            <CertificatesImages
              src={ebac_certificate_1}
              alt="EBAC Certificate 1"
            />
            <CertificatesImages src={curso_em_video_1} alt="Curso em Vídeo 1" />
          </CertificatesImagesContainer>
        </CertificatesContent>
      </CertificatesGlassContainer>
    </Container>
  );
};

export default CertificatesPage;
