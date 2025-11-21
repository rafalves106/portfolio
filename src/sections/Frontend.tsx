import { SkillSection } from "../components/Skills/SkillSection";
import reactLogo from "../assets/logos/react.png";
import typescriptLogo from "../assets/logos/typescript.png";
import cssLogo from "../assets/logos/css.png";
import javascriptLogo from "../assets/logos/javascript.png";
import htmlLogo from "../assets/logos/html.png";
import { useLanguage } from "../context/LanguageContext";

export function Frontend() {
  const { t } = useLanguage();

  return (
    <SkillSection
      sectionTitle="Frontend"
      skills={[
        {
          title: "React",
          logo: reactLogo,
          ranking: t.rankBeginner,
          repos: [
            "github.com/user/react-project1",
            "github.com/user/react-project2",
          ],
          description: t.descReact,
        },
        {
          title: "HTML5",
          logo: htmlLogo,
          ranking: t.rankIntermediate,
          repos: [
            "github.com/user/html-project1",
            "github.com/user/html-project2",
          ],
          description: t.descHtml,
        },
        {
          title: "CSS3",
          logo: cssLogo,
          ranking: t.rankIntermediate,
          repos: [
            "github.com/user/css-project1",
            "github.com/user/css-project2",
          ],
          description: t.descCss,
        },
        {
          title: "JavaScript",
          logo: javascriptLogo,
          ranking: t.rankBasic,
          repos: [
            "github.com/user/javascript-project1",
            "github.com/user/javascript-project2",
          ],
          description: t.descJs,
        },
        {
          title: "TypeScript",
          logo: typescriptLogo,
          ranking: t.rankBasic,
          repos: [
            "github.com/user/typescript-project1",
            "github.com/user/typescript-project2",
          ],
          description: t.descTs,
        },
      ]}
    />
  );
}
