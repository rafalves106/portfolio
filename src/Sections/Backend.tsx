import { SkillSection } from "../components/Skills/SkillSection";
import javaLogo from "../assets/logos/java.png";
import springLogo from "../assets/logos/springboot.png";
import pythonLogo from "../assets/logos/python.png";

export function Backend() {
  return (
    <SkillSection
      sectionTitle="Backend"
      skills={[
        {
          title: "Java",
          logo: javaLogo,
          ranking: "Intermediate",
          repos: [
            "github.com/user/react-project1",
            "github.com/user/react-project2",
          ],
          description:
            "Java is the language where I have the greatest proficiency. My journey with it began as a significant challenge, but it became the foundation for my back-end development..",
        },
        {
          title: "Spring",
          logo: springLogo,
          ranking: "Intermediate",
          repos: [
            "github.com/user/html-project1",
            "github.com/user/html-project2",
          ],
          description:
            "For my project's back-end, I used the Spring framework to build a robust and scalable API. During the development process, I leveraged artificial intelligence tools to accelerate my learning and the implementation of features. This project has motivated me to seek a deeper understanding of Spring and its best practices, something I continue to do actively.",
        },
        {
          title: "Python",
          logo: pythonLogo,
          ranking: "Beginner",
          repos: [
            "github.com/user/css-project1",
            "github.com/user/css-project2",
          ],
          description:
            "I'm learning Python in my Computer Science degree, and I've quickly come to appreciate the language's clean syntax and its power in areas like data analysis. While my specialization is in full-stack development, I am seeking a solid understanding of Python and its ecosystem, as I believe versatility is essential to becoming a more well-rounded professional.",
        },
      ]}
    />
  );
}
