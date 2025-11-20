import {
  ItemPrimaryTitle,
  PagePrimaryTitle,
  PageSecondaryTitle,
  PrimaryText,
} from "../../components/Texts/styles";
import { Icon, StyledContainer } from "../../components/Ui/styles";

import aboutMe from "../../assets/icons/about_me.png";
import certificates from "../../assets/icons/certificates.png";
import techs from "../../assets/icons/techs.png";
import tech_skills from "../../assets/icons/tech_skills.png";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/backend.png";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import {
  SectionContainer,
  SectionHeader,
} from "../../components/Section/styles";
import {
  AboutImageAndTextContainer,
  AboutSection,
  AboutTextContainer,
  CertificatesContent,
  CertificateSection,
  CertificatesImages,
  CertificatesImagesContainer,
  Folder,
  FoldersContainer,
  FolderTitle,
  LogosContainer,
  MenuSection,
  ProjectsSection,
  SkillsContainer,
  TechsSection,
} from "./styles";

// About Section Imports
import aboutMeImage from "../../assets/images/about_me/about_me_image.png";

// Certificates Imports
import ebac_certificate_1 from "../../assets/images/certificates/ebac_1.webp";
import ebac_certificate_2 from "../../assets/images/certificates/ebac_2.webp";
import curso_em_video_1 from "../../assets/images/certificates/curso_em_video_1.webp";

// Techs Section Imports
import cssLogo from "../../assets/logos/css.png";
import htmlLogo from "../../assets/logos/html.png";
import typescriptLogo from "../../assets/logos/typescript.png";
import reactLogo from "../../assets/logos/react.png";
import viteLogo from "../../assets/logos/vite.png";

import javaLogo from "../../assets/logos/java.png";
import springbootLogo from "../../assets/logos/springboot.png";
import pythonLogo from "../../assets/logos/python.png";
import postgresqlLogo from "../../assets/logos/postgresql.png";
import mongodbLogo from "../../assets/logos/mongo.png";

import mysqlLogo from "../../assets/logos/mysql.png";
import gitLogo from "../../assets/logos/git.png";
import githubLogo from "../../assets/logos/github.png";
import vercelLogo from "../../assets/logos/vercel.png";
import renderLogo from "../../assets/logos/render.png";
import folderIcon from "../../assets/icons/folder.png";

// Skills Section Imports
import { Backend } from "../../Sections/Backend";
import { Frontend } from "../../Sections/Frontend";
import { DataBases } from "../../Sections/DataBases";
import { Deploy } from "../../Sections/Deploy";
import { GraphicDesign } from "../../Sections/GraphicDesign";
import { WebDesign } from "../../Sections/WebDesign";
import React from "react";

// FrontEnd Projects Imports
import disneyplusThumbnail from "../../assets/images/cover/disney_plus.webp";
import dashboardThumbnail from "../../assets/images/cover/dashboard.webp";
import formJqueryThumbnail from "../../assets/images/cover/form_jquery.webp";
import todoVueThumbnail from "../../assets/images/cover/todo.webp";
import coffeeShopThumbnail from "../../assets/images/cover/coffee_shop.webp";

import javascriptLogo from "../../assets/logos/javascript.png";
import vueLogo from "../../assets/logos/vue.png";
import bootstrapLogo from "../../assets/logos/bootstrap.png";
import gulpLogo from "../../assets/logos/gulp.png";
import jqueryLogo from "../../assets/logos/jquery.png";
import sassLogo from "../../assets/logos/sass.png";
import ProjectItem from "../../components/ProjectItem";

// BackEnd Projects Imports
import microservicesThumbnail from "../../assets/images/cover/microservice.webp";
import modellingThumbnail from "../../assets/images/cover/modelling.webp";
import computationalThumbnail from "../../assets/images/cover/computational.webp";

import mongoLogo from "../../assets/logos/mongo.png";
import springLogo from "../../assets/logos/springboot.png";
import umlLogo from "../../assets/logos/uml.png";
import diagram from "../../assets/logos/diagram.png";

type Props = {
  abaAtiva: string;
  handleMudarAba: (aba: string) => void;
  handleMudarSecao: (secao: string) => void;
  sectionTitle?: string;
  skills?: SkillItem[];
  secaoAtiva: string;
  mySecaoId: string;
};

interface SkillItem {
  title: string;
  logo: string;
  ranking: string;
  repos?: string[];
  description: string;
}

const LandingPage = (props: Props) => {
  const [sectionActive, setSectionActive] = React.useState<string>("frontend");
  return (
    <>
      {/* Topo Menu */}
      <SectionContainer className="border">
        <SectionHeader>
          <PagePrimaryTitle>Hi, Welcome!</PagePrimaryTitle>
          <PageSecondaryTitle>Click on icons to know more</PageSecondaryTitle>
        </SectionHeader>

        <MenuSection>
          <StyledContainer
            className="glass-effect small"
            onClick={() => props.handleMudarAba("about_me")}
          >
            <Icon className="big" src={aboutMe} alt="About Me" />
            <ItemPrimaryTitle>About Me</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() =>
              props.handleMudarAba && props.handleMudarAba("certificates")
            }
          >
            <Icon className="big" src={certificates} alt="Certificates" />
            <ItemPrimaryTitle>Certificates</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() =>
              props.handleMudarAba && props.handleMudarAba("techs")
            }
          >
            <Icon className="big" src={techs} alt="Techs" />
            <ItemPrimaryTitle>Techs</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() =>
              props.handleMudarAba && props.handleMudarAba("skills")
            }
          >
            <Icon className="big" src={tech_skills} alt="Tech Skills" />
            <ItemPrimaryTitle>Tech Skills</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() =>
              props.handleMudarAba && props.handleMudarAba("frontend")
            }
          >
            <Icon className="big" src={frontend} alt="Frontend Projects" />
            <ItemPrimaryTitle>Frontend Projects</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() =>
              props.handleMudarAba && props.handleMudarAba("backend")
            }
          >
            <Icon className="big" src={backend} alt="Backend Projects" />
            <ItemPrimaryTitle>Backend Projects</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() =>
              window.open("https://www.linkedin.com/in/falves-dev/")
            }
          >
            <Icon className="big" src={linkedin} alt="My LinkedIn" />
            <ItemPrimaryTitle>My LinkedIn</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() => window.open("https://github.com/rafalves106")}
          >
            <Icon className="big" src={github} alt="My GitHub" />
            <ItemPrimaryTitle>My GitHub</ItemPrimaryTitle>
          </StyledContainer>
        </MenuSection>
      </SectionContainer>

      {/* About Me Section */}
      <SectionContainer>
        <SectionHeader>
          <PagePrimaryTitle>About Me</PagePrimaryTitle>
          <PageSecondaryTitle>Know more about myself</PageSecondaryTitle>
        </SectionHeader>

        <AboutSection>
          <AboutImageAndTextContainer>
            <StyledContainer className="glass-effect image">
              <img src={aboutMeImage} alt="about me" />
            </StyledContainer>
            <PrimaryText>
              <span>R</span>afael, but you can call me Falves. I'm 22 years old
              and was born in Governador Valadares, building my life and career
              in Belo Horizonte, where I've lived since childhood. My passion
              for technology first emerged in my pre-teens, when I loved taking
              apart and reassembling electronics. This curiosity evolved into
              the challenge of optimizing and eventually building my own
              computers, which gave me a deep understanding of hardware.
            </PrimaryText>
          </AboutImageAndTextContainer>
          <AboutTextContainer>
            <PrimaryText>
              This foundation led me to work for almost five years as a{" "}
              <b>Web Designer and Graphic Designer</b> at D2F Comunicação.
              There, I had the opportunity to develop my soft skills, learning
              to work in a team and delegate tasks, especially after taking on
              the role of supervisor. My best friend and constant companion is
              my dog, Teko. He reminds me that life is made of simple moments of
              joy.
            </PrimaryText>
            <PrimaryText>
              Two years ago, I became firmly interested in the IT field and set
              a new career goal. Today, I'm finishing a
              <b>Full-Stack Java Developer</b> course and attending a
              <b>Computer Science</b> college program in person, as I believe
              it's the best way to improve my technical and interpersonal
              skills.
            </PrimaryText>
          </AboutTextContainer>
        </AboutSection>
      </SectionContainer>

      {/* Certificates Section */}
      <SectionContainer>
        <SectionHeader>
          <PagePrimaryTitle>Certificates</PagePrimaryTitle>
          <PageSecondaryTitle>Certificados</PageSecondaryTitle>
        </SectionHeader>

        <CertificateSection>
          <CertificatesContent>
            <CertificatesImagesContainer>
              <CertificatesImages
                src={ebac_certificate_2}
                alt="EBAC Certificate 2"
              />
              <CertificatesImages
                src={ebac_certificate_1}
                alt="EBAC Certificate 1"
              />
              <CertificatesImages
                src={curso_em_video_1}
                alt="Curso em Vídeo 1"
              />
            </CertificatesImagesContainer>
          </CertificatesContent>
        </CertificateSection>
      </SectionContainer>

      {/* Techs Section */}
      <SectionContainer>
        <SectionHeader>
          <PagePrimaryTitle>Techs</PagePrimaryTitle>
          <PageSecondaryTitle>Tecnologias</PageSecondaryTitle>
        </SectionHeader>

        <TechsSection>
          <LogosContainer>
            <StyledContainer className="glass-effect logo">
              <img src={reactLogo} alt="React Logo" />
              <ItemPrimaryTitle>React</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={typescriptLogo} alt="TypeScript Logo" />
              <ItemPrimaryTitle>TypeScript</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={viteLogo} alt="Vite Logo" />
              <ItemPrimaryTitle>Vite</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={htmlLogo} alt="HTML Logo" />
              <ItemPrimaryTitle>HTML</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={cssLogo} alt="CSS Logo" />
              <ItemPrimaryTitle>CSS</ItemPrimaryTitle>
            </StyledContainer>

            <StyledContainer className="glass-effect logo">
              <img src={javaLogo} alt="Java Logo" />
              <ItemPrimaryTitle>Java</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={springbootLogo} alt="Spring Boot Logo" />
              <ItemPrimaryTitle>Spring Boot</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={pythonLogo} alt="Python Logo" />
              <ItemPrimaryTitle>Python</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={postgresqlLogo} alt="PostgreSQL Logo" />
              <ItemPrimaryTitle>PostgreSQL</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={mongodbLogo} alt="MongoDB Logo" />
              <ItemPrimaryTitle>MongoDB</ItemPrimaryTitle>
            </StyledContainer>

            <StyledContainer className="glass-effect logo">
              <img src={mysqlLogo} alt="MySQL Logo" />
              <ItemPrimaryTitle>MySQL</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={gitLogo} alt="Git Logo" />
              <ItemPrimaryTitle>Git</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={githubLogo} alt="GitHub Logo" />
              <ItemPrimaryTitle>GitHub</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={vercelLogo} alt="Vercel Logo" />
              <ItemPrimaryTitle>Vercel</ItemPrimaryTitle>
            </StyledContainer>
            <StyledContainer className="glass-effect logo">
              <img src={renderLogo} alt="Render Logo" />
              <ItemPrimaryTitle>Render</ItemPrimaryTitle>
            </StyledContainer>
          </LogosContainer>
        </TechsSection>
      </SectionContainer>

      {/* TechSkills Section */}
      <SectionContainer>
        <SectionHeader>
          <PagePrimaryTitle>Tech Skills</PagePrimaryTitle>
          <PageSecondaryTitle>Habilidades</PageSecondaryTitle>
        </SectionHeader>

        <div style={{ margin: "4rem 0" }}>
          <SkillsContainer>
            {sectionActive === "frontend" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("frontend")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>Frontend</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("frontend")}>
                <Folder src={folderIcon} />
                <FolderTitle>Frontend</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "backend" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("backend")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>Backend</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("backend")}>
                <Folder src={folderIcon} />
                <FolderTitle>Backend</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "databases" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("databases")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>Database</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("databases")}>
                <Folder src={folderIcon} />
                <FolderTitle>Database</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "deploy" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("deploy")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>Deploy</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("deploy")}>
                <Folder src={folderIcon} />
                <FolderTitle>Deploy</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "gdesign" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("gdesign")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>Graphic</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("gdesign")}>
                <Folder src={folderIcon} />
                <FolderTitle>Graphic</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "wdesign" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("wdesign")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>Web</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("wdesign")}>
                <Folder src={folderIcon} />
                <FolderTitle>Web</FolderTitle>
              </FoldersContainer>
            )}
          </SkillsContainer>
        </div>

        {sectionActive === "frontend" && (
          <Frontend
            handleMudarSecao={props.handleMudarSecao}
            secaoAtiva="frontend"
          />
        )}

        {sectionActive === "backend" && (
          <Backend
            handleMudarSecao={props.handleMudarSecao}
            secaoAtiva="backend"
          />
        )}

        {sectionActive === "databases" && (
          <DataBases
            handleMudarSecao={props.handleMudarSecao}
            secaoAtiva="databases"
          />
        )}

        {sectionActive === "deploy" && (
          <Deploy
            handleMudarSecao={props.handleMudarSecao}
            secaoAtiva="deploy"
          />
        )}

        {sectionActive === "gdesign" && (
          <GraphicDesign
            handleMudarSecao={props.handleMudarSecao}
            secaoAtiva="gdesign"
          />
        )}

        {sectionActive === "wdesign" && (
          <WebDesign
            handleMudarSecao={props.handleMudarSecao}
            secaoAtiva={sectionActive}
          />
        )}
      </SectionContainer>

      {/* FrontEnd Projects Section */}
      <SectionContainer>
        <SectionHeader>
          <PagePrimaryTitle>FrontEnd Projects</PagePrimaryTitle>
          <PageSecondaryTitle>Things that I developed</PageSecondaryTitle>
        </SectionHeader>

        <ProjectsSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5vh 10vw",
            }}
          >
            <ProjectItem
              title="Disney+ Clone"
              thumbnail={disneyplusThumbnail}
              description="I used Gulp to optimize the workflow, SCSS for a responsive layout, and JavaScript for the interface's interactivity."
              techs={[
                { logo: javascriptLogo, name: "JavaScript" },
                { logo: htmlLogo, name: "HTML" },
                { logo: gulpLogo, name: "Gulp" },
                { logo: sassLogo, name: "SASS" },
              ]}
              githubLink="https://github.com/rafalves106/clone_disneyplus"
              vercelLink="https://clone-disneyplus-rafael-alves.vercel.app"
            />

            <ProjectItem
              title="Dashboard"
              thumbnail={dashboardThumbnail}
              description="This project is the user interface of the management dashboard I developed for my father business. It was built to consume the back-end API."
              techs={[
                { logo: reactLogo, name: "React" },
                { logo: typescriptLogo, name: "TypeScript" },
                { logo: viteLogo, name: "Vite" },
              ]}
              githubLink="https://github.com"
              vercelLink="https://vercel.com"
            />

            <ProjectItem
              title="JQuery Form"
              thumbnail={formJqueryThumbnail}
              description="In this study project, I utilized jQuery plugins to implement robust form validation, ensuring data integrity and a smooth user experience."
              techs={[
                { logo: javascriptLogo, name: "JavaScript" },
                { logo: htmlLogo, name: "HTML" },
                { logo: cssLogo, name: "CSS" },
                { logo: jqueryLogo, name: "jQuery" },
              ]}
              githubLink="https://github.com/rafalves106/exercicio_plugins_jquery"
              vercelLink="https://exercicio-plugins-jquery-swart-mu.vercel.app"
            />

            <ProjectItem
              title="To-Do VueJS"
              thumbnail={todoVueThumbnail}
              description="A simple to-do list application built with VueJS, allowing users to add, edit, and delete tasks with a user-friendly interface."
              techs={[
                { logo: javascriptLogo, name: "JavaScript" },
                { logo: htmlLogo, name: "HTML" },
                { logo: cssLogo, name: "CSS" },
                { logo: vueLogo, name: "VueJS" },
              ]}
              githubLink="https://github.com/rafalves106/todo-vue"
              vercelLink="https://todo-vue-rafaelalves.vercel.app"
            />

            <ProjectItem
              title="BootStrap Page"
              thumbnail={coffeeShopThumbnail}
              description="A visually appealing landing page for a coffee shop, designed to attract customers and showcase the shop's offerings with Bootstrap."
              techs={[
                { logo: htmlLogo, name: "HTML" },
                { logo: cssLogo, name: "CSS" },
                { logo: bootstrapLogo, name: "Bootstrap" },
              ]}
              githubLink="https://github.com/rafalves106/exercicio_modulo_14"
              vercelLink="https://rafael-alves-aromas-cafe.vercel.app"
            />
          </div>
        </ProjectsSection>
      </SectionContainer>

      {/* BackEnd Projects Section */}
      <SectionContainer>
        <SectionHeader>
          <PagePrimaryTitle>BackEnd Projects</PagePrimaryTitle>
          <PageSecondaryTitle>Things that I developed</PageSecondaryTitle>
        </SectionHeader>

        <ProjectsSection>
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
        </ProjectsSection>
      </SectionContainer>
    </>
  );
};

export default LandingPage;
