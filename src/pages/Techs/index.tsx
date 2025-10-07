import GlassContainer from "../../components/GlassContainer";
import {
  ItemPrimaryTitle,
  PagePrimaryTitle,
  PageSecondaryTitle,
} from "../../components/Texts/styles";
import { Container, Icon, PageHeader } from "../../components/ui/styles";

import iconTechs from "../../assets/icons/techs.png";

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

import { LogosContainer, TechsContainer } from "./styles";

type Props = {
  abaAtiva: string;
  handleMudarAba: (aba: string) => void;
};

const TechsPage = (props: Props) => {
  return (
    <Container className={props.abaAtiva !== "techs" ? "hidden" : ""}>
      <PageHeader>
        <PagePrimaryTitle>Techs</PagePrimaryTitle>
        <PageSecondaryTitle>Tecnologias</PageSecondaryTitle>
      </PageHeader>

      <TechsContainer>
        <Icon className="small" src={iconTechs} alt="Techs" />
        <LogosContainer>
          <GlassContainer containerSize="logo">
            <img src={reactLogo} alt="React Logo" />
            <ItemPrimaryTitle>React</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={typescriptLogo} alt="TypeScript Logo" />
            <ItemPrimaryTitle>TypeScript</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={viteLogo} alt="Vite Logo" />
            <ItemPrimaryTitle>Vite</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={htmlLogo} alt="HTML Logo" />
            <ItemPrimaryTitle>HTML</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={cssLogo} alt="CSS Logo" />
            <ItemPrimaryTitle>CSS</ItemPrimaryTitle>
          </GlassContainer>

          <GlassContainer containerSize="logo">
            <img src={javaLogo} alt="Java Logo" />
            <ItemPrimaryTitle>Java</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={springbootLogo} alt="Spring Boot Logo" />
            <ItemPrimaryTitle>Spring Boot</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={pythonLogo} alt="Python Logo" />
            <ItemPrimaryTitle>Python</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={postgresqlLogo} alt="PostgreSQL Logo" />
            <ItemPrimaryTitle>PostgreSQL</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={mongodbLogo} alt="MongoDB Logo" />
            <ItemPrimaryTitle>MongoDB</ItemPrimaryTitle>
          </GlassContainer>

          <GlassContainer containerSize="logo">
            <img src={mysqlLogo} alt="MySQL Logo" />
            <ItemPrimaryTitle>MySQL</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={gitLogo} alt="Git Logo" />
            <ItemPrimaryTitle>Git</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={githubLogo} alt="GitHub Logo" />
            <ItemPrimaryTitle>GitHub</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={vercelLogo} alt="Vercel Logo" />
            <ItemPrimaryTitle>Vercel</ItemPrimaryTitle>
          </GlassContainer>
          <GlassContainer containerSize="logo">
            <img src={renderLogo} alt="Render Logo" />
            <ItemPrimaryTitle>Render</ItemPrimaryTitle>
          </GlassContainer>
        </LogosContainer>
      </TechsContainer>
    </Container>
  );
};

export default TechsPage;
