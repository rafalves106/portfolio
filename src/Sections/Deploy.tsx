import { SkillSection } from "../components/Skills/SkillSection";
import vercelLogo from "../assets/logos/vercel.png";
import renderLogo from "../assets/logos/render.png";
import neonLogo from "../assets/logos/neon.png";
import { useLanguage } from "../context/LanguageContext";

export function Deploy() {
  const { t } = useLanguage();

  return (
    <SkillSection
      sectionTitle="Deploy"
      skills={[
        {
          title: "Vercel",
          logo: vercelLogo,
          ranking: t.rankBeginner,
          description: t.descVercel,
        },
        {
          title: "Render",
          logo: renderLogo,
          ranking: t.rankBeginner,
          description: t.descRender,
        },
        {
          title: "Neon",
          logo: neonLogo,
          ranking: t.rankBasic,
          description: t.descNeon,
        },
      ]}
    />
  );
}
