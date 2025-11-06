import {
  PagePrimaryTitle,
  PageSecondaryTitle,
} from "../../components/Texts/styles";
import { Icon, PageHeader, StyledContainer } from "../../components/Ui/styles";
import Container from "../../components/Ui";
import frontend from "../../assets/icons/frontend.png";
import ProjectItem from "../../components/ProjectItem/index.tsx";

import disneyplusThumbnail from "../../assets/images/cover/disney_plus.webp";
import dashboardThumbnail from "../../assets/images/cover/dashboard.webp";
import formJqueryThumbnail from "../../assets/images/cover/form_jquery.webp";
import todoVueThumbnail from "../../assets/images/cover/todo.webp";
import coffeeShopThumbnail from "../../assets/images/cover/coffee_shop.webp";

import javascriptLogo from "../../assets/logos/javascript.png";
import htmlLogo from "../../assets/logos/html.png";
import cssLogo from "../../assets/logos/css.png";
import reactLogo from "../../assets/logos/react.png";
import viteLogo from "../../assets/logos/vite.png";
import typescriptLogo from "../../assets/logos/typescript.png";
import vueLogo from "../../assets/logos/vue.png";
import bootstrapLogo from "../../assets/logos/bootstrap.png";
import gulpLogo from "../../assets/logos/gulp.png";
import jqueryLogo from "../../assets/logos/jquery.png";
import sassLogo from "../../assets/logos/sass.png";

type Props = {
  abaAtiva: string;
  handleMudarAba: (aba: string) => void;
};

const FrontEndPage = (props: Props) => {
  return (
    <StyledContainer className={props.abaAtiva !== "frontend" ? "hidden" : ""}>
      <PageHeader>
        <PagePrimaryTitle>FrontEnd Projects</PagePrimaryTitle>
        <PageSecondaryTitle>Things that I developed</PageSecondaryTitle>
      </PageHeader>

      <Container
        containerSize="big"
        containerType="glass-effect"
        handleMudarAba={props.handleMudarAba}
      >
        <Icon className="small" src={frontend} alt="Frontend Projects" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5vh 10vw",
          }}
        >
          <ProjectItem
            title="Disney+ Clone"
            thumbnail={disneyplusThumbnail}
            description="I used Gulp to optimize the workflow, SCSS for a responsive layout, and JavaScript for the interface's interactivity."
            techs={[
              { logo: javascriptLogo, name: "JavaScript" },
              { logo: htmlLogo, name: "HTML" },
              { logo: gulpLogo, name: "Gulp" },
              { logo: sassLogo, name: "SASS" },
            ]}
            githubLink="https://github.com/rafalves106/clone_disneyplus"
            vercelLink="https://clone-disneyplus-rafael-alves.vercel.app"
          />

          <ProjectItem
            title="Dashboard"
            thumbnail={dashboardThumbnail}
            description="This project is the user interface of the management dashboard I developed for my father business. It was built to consume the back-end API."
            techs={[
              { logo: reactLogo, name: "React" },
              { logo: typescriptLogo, name: "TypeScript" },
              { logo: viteLogo, name: "Vite" },
            ]}
            githubLink="https://github.com"
            vercelLink="https://vercel.com"
          />

          <ProjectItem
            title="JQuery Form"
            thumbnail={formJqueryThumbnail}
            description="In this study project, I utilized jQuery plugins to implement robust form validation, ensuring data integrity and a smooth user experience."
            techs={[
              { logo: javascriptLogo, name: "JavaScript" },
              { logo: htmlLogo, name: "HTML" },
              { logo: cssLogo, name: "CSS" },
              { logo: jqueryLogo, name: "jQuery" },
            ]}
            githubLink="https://github.com/rafalves106/exercicio_plugins_jquery"
            vercelLink="https://exercicio-plugins-jquery-swart-mu.vercel.app"
          />

          <ProjectItem
            title="To-Do VueJS"
            thumbnail={todoVueThumbnail}
            description="A simple to-do list application built with VueJS, allowing users to add, edit, and delete tasks with a user-friendly interface."
            techs={[
              { logo: javascriptLogo, name: "JavaScript" },
              { logo: htmlLogo, name: "HTML" },
              { logo: cssLogo, name: "CSS" },
              { logo: vueLogo, name: "VueJS" },
            ]}
            githubLink="https://github.com/rafalves106/todo-vue"
            vercelLink="https://todo-vue-rafaelalves.vercel.app"
          />

          <ProjectItem
            title="BootStrap Page"
            thumbnail={coffeeShopThumbnail}
            description="A visually appealing landing page for a coffee shop, designed to attract customers and showcase the shop's offerings with Bootstrap."
            techs={[
              { logo: htmlLogo, name: "HTML" },
              { logo: cssLogo, name: "CSS" },
              { logo: bootstrapLogo, name: "Bootstrap" },
            ]}
            githubLink="https://github.com/rafalves106/exercicio_modulo_14"
            vercelLink="https://rafael-alves-aromas-cafe.vercel.app"
          />
        </div>
      </Container>
    </StyledContainer>
  );
};

export default FrontEndPage;
