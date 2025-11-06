import {
  PagePrimaryTitle,
  PageSecondaryTitle,
} from "../../components/Texts/styles";
import { StyledContainer, Icon, PageHeader } from "../../components/Ui/styles";

import iconSkills from "../../assets/icons/tech_skills.png";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  ArtboardIcon,
  CodeIcon,
  ComputerIcon,
  Css3Icon,
  Database01Icon,
  Database02Icon,
  JavaIcon,
  LaptopIcon,
  Leaf01Icon,
  Leaf02Icon,
  PythonIcon,
  ReactIcon,
  Typescript01Icon,
  WebDesign01Icon,
  WebDesign02Icon,
  WordpressIcon,
} from "@hugeicons/core-free-icons";
import { FolderContainer, SkillsContainer } from "./styles";
import Container from "../../components/Ui";

type Props = {
  abaAtiva: string;
  secaoAtiva: string;
  handleMudarAba: (aba: string) => void;
  handleMudarSecao: (secao: string) => void;
};

const SkillsPage = (props: Props) => {
  const isHidden = !(
    props.abaAtiva === "skills" && props.secaoAtiva === "menu"
  );
  return (
    <StyledContainer className={isHidden ? "hidden" : ""}>
      <PageHeader>
        <PagePrimaryTitle>Tech Skills</PagePrimaryTitle>
        <PageSecondaryTitle>Habilidades</PageSecondaryTitle>
      </PageHeader>

      <Container
        handleMudarAba={props.handleMudarAba}
        containerSize="big"
        containerType="glass-effect"
      >
        <Icon className="small" src={iconSkills} alt="Tech Skills" />

        <SkillsContainer>
          <div onClick={() => props.handleMudarSecao("frontend")}>
            <FolderContainer>
              <HugeiconsIcon icon={ReactIcon} strokeWidth={1} />
              <HugeiconsIcon icon={Typescript01Icon} strokeWidth={1} />
              <HugeiconsIcon icon={Css3Icon} strokeWidth={1} />
            </FolderContainer>
            <PagePrimaryTitle>Frontend</PagePrimaryTitle>
          </div>

          <div onClick={() => props.handleMudarSecao("backend")}>
            <FolderContainer>
              <HugeiconsIcon icon={JavaIcon} strokeWidth={1} />
              <HugeiconsIcon icon={PythonIcon} strokeWidth={1} />
              <HugeiconsIcon icon={Leaf01Icon} strokeWidth={1} />
            </FolderContainer>
            <PagePrimaryTitle>Backend</PagePrimaryTitle>
          </div>

          <div onClick={() => props.handleMudarSecao("databases")}>
            <FolderContainer>
              <HugeiconsIcon icon={Leaf02Icon} strokeWidth={1} />
              <HugeiconsIcon icon={Database01Icon} strokeWidth={1} />
              <HugeiconsIcon icon={Database02Icon} strokeWidth={1} />
            </FolderContainer>
            <PagePrimaryTitle>Databases</PagePrimaryTitle>
          </div>

          <div onClick={() => props.handleMudarSecao("deploy")}>
            <FolderContainer>
              <HugeiconsIcon icon={LaptopIcon} strokeWidth={1} />
              <HugeiconsIcon icon={ComputerIcon} strokeWidth={1} />
              <HugeiconsIcon icon={CodeIcon} strokeWidth={1} />
            </FolderContainer>
            <PagePrimaryTitle>Deploy/Infra</PagePrimaryTitle>
          </div>

          <div onClick={() => props.handleMudarSecao("gdesign")}>
            <FolderContainer>
              <HugeiconsIcon icon={AdobeIllustratorIcon} strokeWidth={1} />
              <HugeiconsIcon icon={AdobePhotoshopIcon} strokeWidth={1} />
              <HugeiconsIcon icon={ArtboardIcon} strokeWidth={1} />
            </FolderContainer>
            <PagePrimaryTitle>Graphic Design</PagePrimaryTitle>
          </div>

          <div onClick={() => props.handleMudarSecao("wdesign")}>
            <FolderContainer>
              <HugeiconsIcon icon={WordpressIcon} strokeWidth={1} />
              <HugeiconsIcon icon={WebDesign01Icon} strokeWidth={1} />
              <HugeiconsIcon icon={WebDesign02Icon} strokeWidth={1} />
            </FolderContainer>
            <PagePrimaryTitle>Web Design</PagePrimaryTitle>
          </div>
        </SkillsContainer>
      </Container>
    </StyledContainer>
  );
};

export default SkillsPage;
