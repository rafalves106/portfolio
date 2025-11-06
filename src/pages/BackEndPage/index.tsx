import {
  PagePrimaryTitle,
  PageSecondaryTitle,
} from "../../components/Texts/styles";
import { Icon, PageHeader, StyledContainer } from "../../components/Ui/styles";
import Container from "../../components/Ui";
import frontend from "../../assets/icons/frontend.png";
import ProjectItem from "../../components/ProjectItem/index.tsx";

import microservicesThumbnail from "../../assets/images/cover/microservice.webp";
import dashboardThumbnail from "../../assets/images/cover/dashboard.webp";
import modellingThumbnail from "../../assets/images/cover/modelling.webp";
import computationalThumbnail from "../../assets/images/cover/computational.webp";

import javaLogo from "../../assets/logos/java.png";
import mongoLogo from "../../assets/logos/mongo.png";
import springLogo from "../../assets/logos/springboot.png";
import mysqlLogo from "../../assets/logos/mysql.png";
import pythonLogo from "../../assets/logos/python.png";
import umlLogo from "../../assets/logos/uml.png";
import diagram from "../../assets/logos/diagram.png";

type Props = {
  abaAtiva: string;
  handleMudarAba: (aba: string) => void;
};

const BackEndPage = (props: Props) => {
  return (
    <StyledContainer className={props.abaAtiva !== "backend" ? "hidden" : ""}>
      <PageHeader>
        <PagePrimaryTitle>BackEnd Projects</PagePrimaryTitle>
        <PageSecondaryTitle>Things that I developed</PageSecondaryTitle>
      </PageHeader>

      <Container
        containerSize="big"
        containerType="glass-effect"
        handleMudarAba={props.handleMudarAba}
      >
        <Icon className="small" src={frontend} alt="Frontend Projects" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5vh 10vw",
          }}
        >
          <ProjectItem
            title="MicroServices"
            thumbnail={microservicesThumbnail}
            description="Microservices project in Java (Spring Boot), with MongoDB persistence, Docker Compose orchestration, and centralized management via Spring Cloud Config."
            techs={[
              { logo: javaLogo, name: "Java" },
              { logo: mongoLogo, name: "MongoDB" },
              { logo: springLogo, name: "Spring Boot" },
            ]}
            githubLink="https://github.com/rafalves106/Microservices_Project_Ebac"
          />

          <ProjectItem
            title="Dashboard"
            thumbnail={dashboardThumbnail}
            description="This project is the user interface of the management dashboard I developed for my father business. It was built to consume the back-end API."
            techs={[
              { logo: javaLogo, name: "Java" },
              { logo: springLogo, name: "Spring Boot" },
              { logo: mysqlLogo, name: "MySQL" },
            ]}
            githubLink="https://github.com"
          />

          <ProjectItem
            title="Computer Solutions"
            thumbnail={computationalThumbnail}
            description="This project is a collection of academic works I developed on Computational Solutions Programming class during my first graduate semester."
            techs={[
              { logo: javaLogo, name: "Java" },
              { logo: pythonLogo, name: "Python" },
            ]}
            githubLink="https://github.com/rafalves106/Una_Programacao_de_Solucoes_Computacionais"
          />

          <ProjectItem
            title="Software Modeling"
            thumbnail={modellingThumbnail}
            description="This project is a collection of academic works I developed on Software Modeling class during my first graduate semester."
            techs={[
              { logo: mysqlLogo, name: "MySQL" },
              { logo: umlLogo, name: "UML" },
              { logo: diagram, name: "Diagram" },
            ]}
            githubLink="https://github.com/rafalves106/Una_Modelagem_de_Software"
          />
        </div>
      </Container>
    </StyledContainer>
  );
};

export default BackEndPage;
