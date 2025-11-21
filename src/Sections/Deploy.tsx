import { SkillSection } from "../components/Skills/SkillSection";
import vercelLogo from "../assets/logos/vercel.png";
import renderLogo from "../assets/logos/render.png";
import neonLogo from "../assets/logos/neon.png";

export function Deploy() {
  return (
    <SkillSection
      sectionTitle="Deploy"
      skills={[
        {
          title: "Vercel",
          logo: vercelLogo,
          ranking: "Intermediate",
          description:
            "I learned to use Vercel or the deployment of all my frontend projects during my Full-Stack course. Today, it is an essential tool in my workflow, and this very project is hosted on it.",
        },
        {
          title: "Render",
          logo: renderLogo,
          ranking: "Intermediate",
          description:
            "For the back-end deployment of the dashboard I created, I used the Render platform. This experience allowed me to go beyond development, managing the complete life cycle of the application, from code to hosting in a production environment.",
        },
        {
          title: "Neon",
          logo: neonLogo,
          ranking: "Beginner",
          description:
            "For the development of the dashboard, I also used Neon, a managed database service. This experience allowed me to understand the practicality and benefits of platforms that simplify database management in the cloud.",
        },
      ]}
    />
  );
}
