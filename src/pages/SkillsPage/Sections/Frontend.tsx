import { SkillSection } from "../SkillSection";
import reactLogo from "../../../assets/logos/react.png";
import typescriptLogo from "../../../assets/logos/typescript.png";
import cssLogo from "../../../assets/logos/css.png";
import javascriptLogo from "../../../assets/logos/javascript.png";
import htmlLogo from "../../../assets/logos/html.png";

type Props = {
  secaoAtiva: string;
  handleMudarSecao: (secao: string) => void;
};

export function Frontend(props: Props) {
  return (
    <SkillSection
      mySecaoId="frontend"
      secaoAtiva={props.secaoAtiva}
      handleMudarSecao={props.handleMudarSecao}
      sectionTitle="Frontend"
      skills={[
        {
          title: "React",
          logo: reactLogo,
          ranking: "Intermediate",
          repos: [
            "github.com/user/react-project1",
            "github.com/user/react-project2",
          ],
          description:
            "I began my journey with React at the professional course from EBAC, where I acquired essential skills like state management, API access, and componentization.",
        },
        {
          title: "HTML5",
          logo: htmlLogo,
          ranking: "Advanced",
          repos: [
            "github.com/user/html-project1",
            "github.com/user/html-project2",
          ],
          description:
            "My first contact with HTML was in Professor Gustavo Guanabara's course, where I unraveled the foundation of the entire web. I learned how to structure pages and insert texts, images, tables, and links. My interest in HTML is what opened the door to the universe of technology and inspired me to explore this infinite world of development.",
        },
        {
          title: "CSS3",
          logo: cssLogo,
          ranking: "Advanced",
          repos: [
            "github.com/user/css-project1",
            "github.com/user/css-project2",
          ],
          description:
            "When I delved into CSS, I felt an immediate connection, as the technology aligned perfectly with my background in graphic design and web design.",
        },
        {
          title: "JavaScript",
          logo: javascriptLogo,
          ranking: "Beginner",
          repos: [
            "github.com/user/javascript-project1",
            "github.com/user/javascript-project2",
          ],
          description:
            "I learned the fundamentals of programming logic and algorithms with JavaScript during my course at EBAC. While I prefer using TypeScript for the robustness and safety it provides, I recognize JavaScript as an essential pillar of frontend development and the foundation of the entire ecosystem.",
        },
        {
          title: "TypeScript",
          logo: typescriptLogo,
          ranking: "Beginner",
          repos: [
            "github.com/user/typescript-project1",
            "github.com/user/typescript-project2",
          ],
          description:
            "I adopted TypeScript during my journey with React and used it to build more robust and secure projects in my course. This hands-on experience was crucial for the development of the management dashboard I created for my father's business.",
        },
      ]}
    />
  );
}
