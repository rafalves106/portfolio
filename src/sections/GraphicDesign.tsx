import { SkillSection } from "../components/Skills/SkillSection";
import corelLogo from "../assets/logos/coreldraw.png";
import photoshopLogo from "../assets/logos/photoshop.png";
import illustratorLogo from "../assets/logos/illustrator.png";
import { useLanguage } from "../context/LanguageContext";

export function GraphicDesign() {
  const { t } = useLanguage();

  return (
    <SkillSection
      sectionTitle="Graphic Design"
      skills={[
        {
          title: "CorelDRAW",
          logo: corelLogo,
          ranking: t.rankIntermediate,
          description: t.descCorel,
        },
        {
          title: "Photoshop",
          logo: photoshopLogo,
          ranking: t.rankBeginner,
          description: t.descPhotoshop,
        },
        {
          title: "Illustrator",
          logo: illustratorLogo,
          ranking: t.rankBeginner,
          description: t.descIllustrator,
        },
      ]}
    />
  );
}
