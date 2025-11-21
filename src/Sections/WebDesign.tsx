import { SkillSection } from "../components/Skills/SkillSection";
import wordpressLogo from "../assets/logos/wordpress.png";
import elementorLogo from "../assets/logos/elementor.png";
import canvaLogo from "../assets/logos/canva.png";
import { useLanguage } from "../context/LanguageContext";

export function WebDesign() {
  const { t } = useLanguage();

  return (
    <SkillSection
      sectionTitle="Web Design"
      skills={[
        {
          title: "WordPress",
          logo: wordpressLogo,
          ranking: t.rankIntermediate,
          description: t.descWordpress,
        },
        {
          title: "Canva",
          logo: canvaLogo,
          ranking: t.rankBeginner,
          description: t.descCanva,
        },
        {
          title: "Elementor",
          logo: elementorLogo,
          ranking: t.rankBeginner,
          description: t.descElementor,
        },
      ]}
    />
  );
}
