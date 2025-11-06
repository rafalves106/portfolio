import {
  PagePrimaryTitle,
  PageSecondaryTitle,
  SecondaryText,
  ItemPrimaryTitle,
} from "../../components/Texts/styles";
import { Icon, PageHeader, StyledContainer } from "../../components/Ui/styles";
import Container from "../../components/Ui";

import { Github01Icon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  SkillRank,
  SkillRankAndRepositories,
  SkillRepositories,
  SkillsListContainer,
  SkillTech,
  SkillTechContent,
} from "./styles";

import iconFolder from "../../assets/icons/folder.png";

interface SkillItem {
  title: string;
  logo: string;
  ranking: string;
  repos?: string[];
  description: string;
}

type Props = {
  sectionTitle?: string;
  skills?: SkillItem[];
  secaoAtiva: string;
  mySecaoId: string;
  handleMudarSecao: (secao: string) => void;
};

const renderStars = (rank: string) => {
  const rankMap: { [key: string]: number } = {
    Advanced: 4,
    Intermediate: 3,
    Beginner: 2,
    Basic: 1,
  };
  const filledStars = rankMap[rank] || 0;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(
        <HugeiconsIcon
          key={i}
          icon={StarIcon}
          color="#edcf09ff"
          strokeWidth={1}
        />
      );
    } else {
      stars.push(
        <HugeiconsIcon key={i} icon={StarIcon} color="#999" strokeWidth={1} />
      );
    }
  }
  return stars;
};

export function SkillSection(props: Props) {
  const isVisible = props.secaoAtiva === props.mySecaoId;
  const visibilityClass = isVisible ? "" : "hidden";

  const renderizaSkills = () => {
    if (props.skills && props.skills.length > 0) {
      return (
        <SkillsListContainer>
          {props.skills.map((skill, index) => (
            <SkillTech key={index}>
              <img
                src={skill.logo}
                alt={skill.title}
                style={{ width: 56, height: "auto" }}
              />

              <SkillTechContent>
                <ItemPrimaryTitle>{skill.title}</ItemPrimaryTitle>

                <SkillRankAndRepositories>
                  <SkillRank>{renderStars(skill.ranking)}</SkillRank>

                  {skill.repos && skill.repos.length > 0 && (
                    <SkillRepositories>
                      <span>Top Repositories:</span>
                      {skill.repos?.slice(0, 3).map((repo, i) => (
                        <a
                          key={i}
                          href={repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HugeiconsIcon icon={Github01Icon} strokeWidth={1} />
                        </a>
                      ))}
                    </SkillRepositories>
                  )}
                </SkillRankAndRepositories>

                <SecondaryText>{skill.description}</SecondaryText>
              </SkillTechContent>
            </SkillTech>
          ))}
        </SkillsListContainer>
      );
    }
    return null;
  };

  return (
    <StyledContainer className={visibilityClass}>
      <PageHeader>
        <PagePrimaryTitle>{props.sectionTitle}</PagePrimaryTitle>
        <PageSecondaryTitle>Where I am specialized</PageSecondaryTitle>
      </PageHeader>

      <Container
        handleMudarAba={props.handleMudarSecao}
        containerSize="big"
        containerType="glass-effect"
      >
        <Icon className="small" src={iconFolder} alt="Tech Skills" />

        {renderizaSkills()}
      </Container>
    </StyledContainer>
  );
}
