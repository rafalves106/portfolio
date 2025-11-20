import { SkillSection } from "../components/Skills/SkillSection";
import corelLogo from "../assets/logos/coreldraw.png";
import photoshopLogo from "../assets/logos/photoshop.png";
import illustratorLogo from "../assets/logos/illustrator.png";

type Props = {
  secaoAtiva: string;
  handleMudarSecao: (secao: string) => void;
};

export function GraphicDesign(props: Props) {
  return (
    <SkillSection
      mySecaoId="gdesign"
      secaoAtiva={props.secaoAtiva}
      handleMudarSecao={props.handleMudarSecao}
      sectionTitle="Graphic Design"
      skills={[
        {
          title: "CorelDRAW",
          logo: corelLogo,
          ranking: "Advanced",
          description:
            "As part of my almost 5 years of experience in design, I have a solid command of CorelDRAW. I used the tool for the creation of visual identities and printed materials, which gave me a strong understanding of design principles, something I apply today in developing interfaces with a focus on aesthetics and usability.",
        },
        {
          title: "Photoshop",
          logo: photoshopLogo,
          ranking: "Intermediate",
          description:
            "My command of Adobe Photoshop is focused on creating realistic mockups, a skill I developed throughout my design experience. While the software was also used for other digital arts, my primary goal was to bring life to visual identity projects, presenting the concept in a professional and impactful way.",
        },
        {
          title: "Illustrator",
          logo: illustratorLogo,
          ranking: "Intermediate",
          description:
            "Even though it wasn't my main software, I am proficient in Adobe Illustrator and used it frequently during my experience as a designer.",
        },
      ]}
    />
  );
}
