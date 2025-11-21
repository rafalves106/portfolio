import { SkillSection } from "../components/Skills/SkillSection";
import javaLogo from "../assets/logos/java.png";
import springLogo from "../assets/logos/springboot.png";
import pythonLogo from "../assets/logos/python.png";
import { useLanguage } from "../context/LanguageContext"; // Importe o hook

export function Backend() {
  const { t } = useLanguage(); // Use o hook

  return (
    <SkillSection
      sectionTitle="Backend" // Este título pode ser traduzido se desejar, ex: t.folderBackend
      skills={[
        {
          title: "Java",
          logo: javaLogo,
          ranking: t.rankBeginner,
          repos: [
            "github.com/user/react-project1",
            "github.com/user/react-project2",
          ],
          description: t.descJava,
        },
        {
          title: "Spring",
          logo: springLogo,
          ranking: t.rankBeginner,
          repos: [
            "github.com/user/html-project1",
            "github.com/user/html-project2",
          ],
          description: t.descSpring,
        },
        {
          title: "Python",
          logo: pythonLogo,
          ranking: t.rankBasic,
          repos: [
            "github.com/user/css-project1",
            "github.com/user/css-project2",
          ],
          description: t.descPython,
        },
      ]}
    />
  );
}
