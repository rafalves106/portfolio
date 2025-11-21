import { SkillSection } from "../components/Skills/SkillSection";
import postgresLogo from "../assets/logos/postgresql.png";
import mysqlLogo from "../assets/logos/mysql.png";
import mongoLogo from "../assets/logos/mongo.png";
import { useLanguage } from "../context/LanguageContext";

export function DataBases() {
  const { t } = useLanguage();

  return (
    <SkillSection
      sectionTitle="Databases"
      skills={[
        {
          title: "PostgreSQL",
          logo: postgresLogo,
          ranking: t.rankBeginner,
          repos: [
            "github.com/user/react-project1",
            "github.com/user/react-project2",
          ],
          description: t.descPostgres,
        },
        {
          title: "MySQL",
          logo: mysqlLogo,
          ranking: t.rankBeginner,
          repos: [
            "github.com/user/html-project1",
            "github.com/user/html-project2",
          ],
          description: t.descMysql,
        },
        {
          title: "MongoDB",
          logo: mongoLogo,
          ranking: t.rankBasic,
          repos: [
            "github.com/user/css-project1",
            "github.com/user/css-project2",
          ],
          description: t.descMongo,
        },
      ]}
    />
  );
}
