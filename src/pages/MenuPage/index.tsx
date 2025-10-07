import GlassContainer from "../../components/GlassContainer";
import {
  ItemPrimaryTitle,
  ItemSecondaryTitle,
  PagePrimaryTitle,
  PageSecondaryTitle,
} from "../../components/Texts/styles";
import { MenuPageContent } from "./styles";

import aboutMe from "../../assets/icons/about_me.png";
import certificates from "../../assets/icons/certificates.png";
import techs from "../../assets/icons/techs.png";
import tech_skills from "../../assets/icons/tech_skills.png";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/backend.png";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import { Icon, Container, PageHeader } from "../../components/ui/styles";

type Props = {
  abaAtiva: string;
  handleMudarAba: (aba: string) => void;
};

const MenuPage = (props: Props) => {
  return (
    <Container className={props.abaAtiva !== "menu" ? "hidden" : ""}>
      <PageHeader>
        <PagePrimaryTitle>Hi, Welcome!</PagePrimaryTitle>
        <PageSecondaryTitle>Click on icons to know more</PageSecondaryTitle>
      </PageHeader>

      <MenuPageContent>
        <GlassContainer
          containerSize="small"
          onClick={() => props.handleMudarAba("about_me")}
        >
          <Icon className="big" src={aboutMe} alt="About Me" />
          <ItemPrimaryTitle>About Me</ItemPrimaryTitle>
          <ItemSecondaryTitle>Sobre Mim</ItemSecondaryTitle>
        </GlassContainer>

        <GlassContainer
          containerSize="small"
          onClick={() =>
            props.handleMudarAba && props.handleMudarAba("certificates")
          }
        >
          <Icon className="big" src={certificates} alt="Certificates" />
          <ItemPrimaryTitle>Certificates</ItemPrimaryTitle>
          <ItemSecondaryTitle>Certificados</ItemSecondaryTitle>
        </GlassContainer>

        <GlassContainer
          containerSize="small"
          onClick={() => props.handleMudarAba && props.handleMudarAba("techs")}
        >
          <Icon className="big" src={techs} alt="Techs" />
          <ItemPrimaryTitle>Techs</ItemPrimaryTitle>
          <ItemSecondaryTitle>Tecnologias</ItemSecondaryTitle>
        </GlassContainer>

        <GlassContainer
          containerSize="small"
          onClick={() =>
            props.handleMudarAba && props.handleMudarAba("tech_skills")
          }
        >
          <Icon className="big" src={tech_skills} alt="Tech Skills" />
          <ItemPrimaryTitle>Tech Skills</ItemPrimaryTitle>
          <ItemSecondaryTitle>Habilidades</ItemSecondaryTitle>
        </GlassContainer>

        <GlassContainer
          containerSize="small"
          onClick={() =>
            props.handleMudarAba && props.handleMudarAba("frontend")
          }
        >
          <Icon className="big" src={frontend} alt="Frontend Projects" />
          <ItemPrimaryTitle>Frontend Projects</ItemPrimaryTitle>
          <ItemSecondaryTitle>Projetos Frontend</ItemSecondaryTitle>
        </GlassContainer>

        <GlassContainer
          containerSize="small"
          onClick={() =>
            props.handleMudarAba && props.handleMudarAba("backend")
          }
        >
          <Icon className="big" src={backend} alt="Backend Projects" />
          <ItemPrimaryTitle>Backend Projects</ItemPrimaryTitle>
          <ItemSecondaryTitle>Projetos Backend</ItemSecondaryTitle>
        </GlassContainer>

        <GlassContainer
          containerSize="small"
          onClick={() =>
            props.handleMudarAba && props.handleMudarAba("linkedin")
          }
        >
          <Icon className="big" src={linkedin} alt="My LinkedIn" />
          <ItemPrimaryTitle>My LinkedIn</ItemPrimaryTitle>
          <ItemSecondaryTitle>Meu LinkedIn</ItemSecondaryTitle>
        </GlassContainer>

        <GlassContainer
          containerSize="small"
          onClick={() => props.handleMudarAba && props.handleMudarAba("github")}
        >
          <Icon className="big" src={github} alt="My GitHub" />
          <ItemPrimaryTitle>My GitHub</ItemPrimaryTitle>
          <ItemSecondaryTitle>Meu GitHub</ItemSecondaryTitle>
        </GlassContainer>
      </MenuPageContent>
    </Container>
  );
};

export default MenuPage;
