import { SkillSection } from "../SkillSection";
import wordpressLogo from "../../../assets/logos/wordpress.png";
import elementorLogo from "../../../assets/logos/elementor.png";
import canvaLogo from "../../../assets/logos/canva.png";

type Props = {
  secaoAtiva: string;
  handleMudarSecao: (secao: string) => void;
};

export function WebDesign(props: Props) {
  return (
    <SkillSection
      mySecaoId="wdesign"
      secaoAtiva={props.secaoAtiva}
      handleMudarSecao={props.handleMudarSecao}
      sectionTitle="Web Design"
      skills={[
        {
          title: "WordPress",
          logo: wordpressLogo,
          ranking: "Advanced",
          description:
            "During my experience as a designer, I created websites and landing pages using the WordPress platform. In this process, I gained familiarity with the ecosystem, including plugins and themes, and used my knowledge of CSS to customize the projects.",
        },
        {
          title: "Canva",
          logo: canvaLogo,
          ranking: "Intermediate",
          description:
            "As part of my design experience, I used Canva for the creation of website banners and other visual materials. This familiarity with the tool demonstrates my ability to use intuitive and efficient design platforms to deliver high-quality visual content with agility.",
        },
        {
          title: "Elementor",
          logo: elementorLogo,
          ranking: "Intermediate",
          description:
            "To create intuitive and responsive pages, I used Elementor. This tool's visual editor allowed me to efficiently combine my design experience with development, resulting in websites with unique identities and enhanced usability.",
        },
      ]}
    />
  );
}
