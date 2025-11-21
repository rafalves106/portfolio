import React, { useRef } from "react";

import {
  ItemPrimaryTitle,
  PagePrimaryTitle,
  PageSecondaryTitle,
  PrimaryText,
} from "../components/Texts/styles";

import aboutMe from "../assets/icons/about_me.png";
import certificates from "../assets/icons/certificates.png";
import techs from "../assets/icons/techs.png";
import tech_skills from "../assets/icons/tech_skills.png";
import frontend from "../assets/icons/frontend.png";
import backend from "../assets/icons/backend.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import {
  AboutImageAndTextContainer,
  AboutSection,
  AboutTextContainer,
  CertificateSection,
  CertificatesImages,
  CertificatesImagesContainer,
  Container,
  Folder,
  FoldersContainer,
  FolderTitle,
  FooterContainer,
  Icon,
  LanguageSwitchButton,
  LogosContainer,
  MenuSection,
  ProjectsGrid,
  ProjectsSection,
  ScrollToTopButton,
  SectionContainer,
  SectionHeader,
  SkillsContainer,
  StyledContainer,
  TechsSection,
} from "./styles";

// About Section Imports
import aboutMeImage from "../assets/images/about_me/about_me_image.png";

// Certificates Imports
import ebac_certificate_1 from "../assets/images/certificates/ebac_1.webp";
import ebac_certificate_2 from "../assets/images/certificates/ebac_2.webp";
import curso_em_video_1 from "../assets/images/certificates/curso_em_video_1.webp";

// Techs Section Imports
import cssLogo from "../assets/logos/css.png";
import htmlLogo from "../assets/logos/html.png";
import typescriptLogo from "../assets/logos/typescript.png";
import reactLogo from "../assets/logos/react.png";
import viteLogo from "../assets/logos/vite.png";

import javaLogo from "../assets/logos/java.png";
import springbootLogo from "../assets/logos/springboot.png";
import pythonLogo from "../assets/logos/python.png";
import postgresqlLogo from "../assets/logos/postgresql.png";
import mongodbLogo from "../assets/logos/mongo.png";

import mysqlLogo from "../assets/logos/mysql.png";
import gitLogo from "../assets/logos/git.png";
import githubLogo from "../assets/logos/github.png";
import vercelLogo from "../assets/logos/vercel.png";
import renderLogo from "../assets/logos/render.png";
import folderIcon from "../assets/icons/folder.png";

// Skills Section Imports
import { Backend } from "../sections/Backend";
import { Frontend } from "../sections/Frontend";
import { DataBases } from "../sections/DataBases";
import { Deploy } from "../sections/Deploy";
import { GraphicDesign } from "../sections/GraphicDesign";
import { WebDesign } from "../sections/WebDesign";

// FrontEnd Projects Imports
import disneyplusThumbnail from "../assets/images/cover/disney_plus.webp";
import dashboardThumbnail from "../assets/images/cover/dashboard.webp";
import formJqueryThumbnail from "../assets/images/cover/form_jquery.webp";
import todoVueThumbnail from "../assets/images/cover/todo.webp";
import coffeeShopThumbnail from "../assets/images/cover/coffee_shop.webp";

import javascriptLogo from "../assets/logos/javascript.png";
import vueLogo from "../assets/logos/vue.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";
import gulpLogo from "../assets/logos/gulp.png";
import jqueryLogo from "../assets/logos/jquery.png";
import sassLogo from "../assets/logos/sass.png";
import ProjectItem from "../components/ProjectItem";

// BackEnd Projects Imports
import microservicesThumbnail from "../assets/images/cover/microservice.webp";
import modellingThumbnail from "../assets/images/cover/modelling.webp";
import computationalThumbnail from "../assets/images/cover/computational.webp";

import mongoLogo from "../assets/logos/mongo.png";
import springLogo from "../assets/logos/springboot.png";
import umlLogo from "../assets/logos/uml.png";
import diagram from "../assets/logos/diagram.png";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

// 1. RENOMEAMOS O COMPONENTE PRINCIPAL PARA "CONTENT"
const LandingPageContent = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [sectionActive, setSectionActive] = React.useState<string>("frontend");

  const aboutRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const techsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    elementRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <LanguageSwitchButton onClick={toggleLanguage}>
        <span>{language === "en" ? "🇺🇸" : "🇧🇷"}</span>
        {language === "en" ? "EN" : "PT"}
      </LanguageSwitchButton>

      <SectionContainer>
        <SectionHeader>
          <PagePrimaryTitle>{t.welcome}</PagePrimaryTitle>
          <PageSecondaryTitle>{t.clickIcons}</PageSecondaryTitle>
        </SectionHeader>

        <MenuSection>
          <StyledContainer
            className="glass-effect small"
            onClick={() => scrollToSection(aboutRef)}
          >
            <Icon className="big" src={aboutMe} alt="About Me" />
            <ItemPrimaryTitle>{t.menuAbout}</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() => scrollToSection(certificatesRef)}
          >
            <Icon className="big" src={certificates} alt="Certificates" />
            <ItemPrimaryTitle>{t.menuCertificates}</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() => scrollToSection(techsRef)}
          >
            <Icon className="big" src={techs} alt="Techs" />
            <ItemPrimaryTitle>{t.menuTechs}</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() => scrollToSection(skillsRef)}
          >
            <Icon className="big" src={tech_skills} alt="Tech Skills" />
            <ItemPrimaryTitle>{t.menuSkills}</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() => scrollToSection(frontendRef)}
          >
            <Icon className="big" src={frontend} alt="Frontend Projects" />
            <ItemPrimaryTitle>{t.menuFrontend}</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() => scrollToSection(backendRef)}
          >
            <Icon className="big" src={backend} alt="Backend Projects" />
            <ItemPrimaryTitle>{t.menuBackend}</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() =>
              window.open("https://www.linkedin.com/in/falves-dev/")
            }
          >
            <Icon className="big" src={linkedin} alt="My LinkedIn" />
            <ItemPrimaryTitle>{t.menuLinkedin}</ItemPrimaryTitle>
          </StyledContainer>

          <StyledContainer
            className="glass-effect small"
            onClick={() => window.open("https://github.com/rafalves106")}
          >
            <Icon className="big" src={github} alt="My GitHub" />
            <ItemPrimaryTitle>{t.menuGithub}</ItemPrimaryTitle>
          </StyledContainer>
        </MenuSection>
      </SectionContainer>

      {/* About Me Section */}
      <div ref={aboutRef} style={{ width: "100%" }}>
        <SectionContainer>
          <SectionHeader>
            <PagePrimaryTitle>{t.aboutTitle}</PagePrimaryTitle>
            <PageSecondaryTitle>{t.aboutSubtitle}</PageSecondaryTitle>
          </SectionHeader>

          <AboutSection>
            <AboutImageAndTextContainer>
              <StyledContainer className="glass-effect image">
                <img src={aboutMeImage} alt="about me" />
              </StyledContainer>
              <AboutTextContainer>
                <PrimaryText>{t.aboutText1}</PrimaryText>
                <PrimaryText>{t.aboutText2}</PrimaryText>
              </AboutTextContainer>
            </AboutImageAndTextContainer>

            <AboutTextContainer>
              <PrimaryText>{t.aboutText3}</PrimaryText>
              <PrimaryText>{t.aboutText4}</PrimaryText>
            </AboutTextContainer>
          </AboutSection>
        </SectionContainer>
      </div>

      <div ref={certificatesRef} style={{ width: "100%" }}>
        <SectionContainer>
          <SectionHeader>
            <PagePrimaryTitle>{t.certificatesTitle}</PagePrimaryTitle>
            <PageSecondaryTitle>{t.certificatesSubtitle}</PageSecondaryTitle>
          </SectionHeader>

          <CertificateSection>
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
          </CertificateSection>
        </SectionContainer>
      </div>

      <div ref={techsRef} style={{ width: "100%" }}>
        <SectionContainer>
          <SectionHeader>
            <PagePrimaryTitle>{t.techsTitle}</PagePrimaryTitle>
            <PageSecondaryTitle>{t.techsSubtitle}</PageSecondaryTitle>
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
      </div>

      <div ref={skillsRef} style={{ width: "100%" }}>
        <SectionContainer>
          <SectionHeader>
            <PagePrimaryTitle>{t.skillsTitle}</PagePrimaryTitle>
            <PageSecondaryTitle>{t.skillsSubtitle}</PageSecondaryTitle>
          </SectionHeader>

          <SkillsContainer>
            {sectionActive === "frontend" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("frontend")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderFrontend}</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("frontend")}>
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderFrontend}</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "backend" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("backend")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderBackend}</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("backend")}>
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderBackend}</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "databases" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("databases")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderDatabase}</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("databases")}>
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderDatabase}</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "deploy" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("deploy")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderDeploy}</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("deploy")}>
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderDeploy}</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "gdesign" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("gdesign")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderGraphic}</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("gdesign")}>
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderGraphic}</FolderTitle>
              </FoldersContainer>
            )}

            {sectionActive === "wdesign" ? (
              <FoldersContainer
                className="is-active"
                onClick={() => setSectionActive("wdesign")}
              >
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderWeb}</FolderTitle>
              </FoldersContainer>
            ) : (
              <FoldersContainer onClick={() => setSectionActive("wdesign")}>
                <Folder src={folderIcon} />
                <FolderTitle>{t.folderWeb}</FolderTitle>
              </FoldersContainer>
            )}
          </SkillsContainer>

          {/* CONTEÚDO DENTRO DO NOVO CARD DE SKILLS */}
          {sectionActive === "frontend" && <Frontend />}
          {sectionActive === "backend" && <Backend />}
          {sectionActive === "databases" && <DataBases />}
          {sectionActive === "deploy" && <Deploy />}
          {sectionActive === "gdesign" && <GraphicDesign />}
          {sectionActive === "wdesign" && <WebDesign />}
        </SectionContainer>
      </div>

      <div ref={frontendRef} style={{ width: "100%" }}>
        <SectionContainer>
          <SectionHeader>
            <PagePrimaryTitle>{t.projectsFrontTitle}</PagePrimaryTitle>
            <PageSecondaryTitle>{t.projectsSubtitle}</PageSecondaryTitle>
          </SectionHeader>

          <ProjectsSection>
            <ProjectsGrid>
              <ProjectItem
                title="Disney+ Clone"
                thumbnail={disneyplusThumbnail}
                description={t.descDisney}
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
                description={t.descDashboard}
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
                description={t.descJquery}
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
                description={t.descTodo}
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
                description={t.descCoffee}
                techs={[
                  { logo: htmlLogo, name: "HTML" },
                  { logo: cssLogo, name: "CSS" },
                  { logo: bootstrapLogo, name: "Bootstrap" },
                ]}
                githubLink="https://github.com/rafalves106/exercicio_modulo_14"
                vercelLink="https://rafael-alves-aromas-cafe.vercel.app"
              />
            </ProjectsGrid>
          </ProjectsSection>
        </SectionContainer>
      </div>

      <div ref={backendRef} style={{ width: "100%" }}>
        <SectionContainer>
          <SectionHeader>
            <PagePrimaryTitle>{t.projectsBackTitle}</PagePrimaryTitle>
            <PageSecondaryTitle>{t.projectsSubtitle}</PageSecondaryTitle>
          </SectionHeader>

          <ProjectsSection>
            <ProjectsGrid>
              <ProjectItem
                title="MicroServices"
                thumbnail={microservicesThumbnail}
                description={t.descMicroservices}
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
                description={t.descDashboard}
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
                description={t.descCompSolutions}
                techs={[
                  { logo: javaLogo, name: "Java" },
                  { logo: pythonLogo, name: "Python" },
                ]}
                githubLink="https://github.com/rafalves106/Una_Programacao_de_Solucoes_Computacionais"
              />

              <ProjectItem
                title="Software Modeling"
                thumbnail={modellingThumbnail}
                description={t.descModeling}
                techs={[
                  { logo: mysqlLogo, name: "MySQL" },
                  { logo: umlLogo, name: "UML" },
                  { logo: diagram, name: "Diagram" },
                ]}
                githubLink="https://github.com/rafalves106/Una_Modelagem_de_Software"
              />
            </ProjectsGrid>
          </ProjectsSection>
        </SectionContainer>
      </div>

      <FooterContainer>
        <p>
          {language === "en" ? "Designed & Developed by" : "Desenvolvido por"}{" "}
          <span>Rafael "Falves" Alves</span>
        </p>
        <p>
          {language === "en"
            ? `© ${new Date().getFullYear()} • Built with React, TypeScript & Styled Components`
            : `© ${new Date().getFullYear()} • Desenvolvido com React, TypeScript & Styled Components`}
        </p>

        <ScrollToTopButton onClick={scrollToTop}>
          {language === "en" ? "Back to top ↑" : "Voltar ao topo ↑"}
        </ScrollToTopButton>
      </FooterContainer>
    </Container>
  );
};

// 2. CRIAMOS ESTE NOVO WRAPPER PARA ENVOLVER TUDO COM O PROVIDER
const LandingPage = () => {
  return (
    <LanguageProvider>
      <LandingPageContent />
    </LanguageProvider>
  );
};

export default LandingPage;
