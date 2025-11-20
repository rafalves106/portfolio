import { SkillSection } from "../components/Skills/SkillSection";
import postgresLogo from "../assets/logos/postgresql.png";
import mysqlLogo from "../assets/logos/mysql.png";
import mongoLogo from "../assets/logos/mongo.png";

type Props = {
  secaoAtiva: string;
  handleMudarSecao: (secao: string) => void;
};

export function DataBases(props: Props) {
  return (
    <SkillSection
      mySecaoId="databases"
      secaoAtiva={props.secaoAtiva}
      handleMudarSecao={props.handleMudarSecao}
      sectionTitle="Databases"
      skills={[
        {
          title: "PostgreSQL",
          logo: postgresLogo,
          ranking: "Intermediate",
          repos: [
            "github.com/user/react-project1",
            "github.com/user/react-project2",
          ],
          description:
            "I gained hands-on experience with PostgreSQL in the final projects of my Back-End Development course. I used this relational database to manage and persist application data, which gave me a solid foundation in using SQL and understanding the importance of data integrity and organization in a system.",
        },
        {
          title: "MySQL",
          logo: mysqlLogo,
          ranking: "Intermediate",
          repos: [
            "github.com/user/html-project1",
            "github.com/user/html-project2",
          ],
          description:
            "I gained knowledge of MySQL through my studies in my Computer Science degree and, more importantly, I applied it directly to the development of the project for my father's business.",
        },
        {
          title: "MongoDB",
          logo: mongoLogo,
          ranking: "Beginner",
          repos: [
            "github.com/user/css-project1",
            "github.com/user/css-project2",
          ],
          description:
            "I had my first experience with MongoDB at the end of my back-end Java course. From this initial contact, I recognized the potential of non-relational databases and their flexibility for modern development. It is an area in which I will definitely seek to deepen my knowledge and specialize in the future.",
        },
      ]}
    />
  );
}
