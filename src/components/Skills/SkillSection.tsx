import { SecondaryText, ItemPrimaryTitle } from "../Texts/styles";

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
import { SkillsSection } from "../../landingPage/styles";

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
    <div>
      <SkillsSection> {renderizaSkills()}</SkillsSection>
    </div>
  );
}
