import { ItemPrimaryTitle, SecondaryText } from "../Texts/styles";
import {
  ProjectItemContainer,
  ProjectHeader,
  ProjectTechs,
  ProjectThumbnailContainer,
  ProjectThumbnailCover,
  ProjectThumbnailLinks,
  ProjectDescriptionContainer,
} from "./styles";
import githubLogo from "../../assets/logos/github.png";
import vercelLogo from "../../assets/logos/vercel.png";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
  techs: { logo: string; name: string }[];
  githubLink?: string;
  vercelLink?: string;
};

const ProjectItem = (props: Props) => {
  return (
    <ProjectItemContainer>
      <ProjectHeader>
        <ItemPrimaryTitle>{props.title}</ItemPrimaryTitle>
        <ProjectTechs>
          {props.techs.map((tech) => (
            <img
              key={tech.name}
              src={tech.logo}
              alt={tech.name}
              title={tech.name}
            />
          ))}
        </ProjectTechs>
      </ProjectHeader>

      <ProjectThumbnailContainer>
        <ProjectThumbnailCover src={props.thumbnail} alt={props.title} />

        <ProjectThumbnailLinks>
          {props.githubLink && props.vercelLink ? (
            <>
              <img
                className="top"
                src={githubLogo}
                alt="GitHub"
                onClick={() => window.open(props.githubLink, "_blank")}
              />
              <img
                className="bottom"
                src={vercelLogo}
                alt="Vercel"
                onClick={() => window.open(props.vercelLink, "_blank")}
              />
            </>
          ) : props.githubLink ? (
            <img
              className="middle"
              src={githubLogo}
              alt="GitHub"
              onClick={() => window.open(props.githubLink, "_blank")}
            />
          ) : props.vercelLink ? (
            <img
              className="middle"
              src={vercelLogo}
              alt="Vercel"
              onClick={() => window.open(props.vercelLink, "_blank")}
            />
          ) : null}
        </ProjectThumbnailLinks>
      </ProjectThumbnailContainer>

      <ProjectDescriptionContainer>
        <SecondaryText>{props.description}</SecondaryText>
      </ProjectDescriptionContainer>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
