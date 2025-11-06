import {
  PagePrimaryTitle,
  PageSecondaryTitle,
  PrimaryText,
  SecondaryText,
} from "../../components/Texts/styles";
import { StyledContainer, Icon, PageHeader } from "../../components/Ui/styles";

import aboutMeIcon from "../../assets/icons/about_me.png";
import aboutMeImage from "../../assets/images/about_me/about_me_image.png";
import { AboutImageAndTextContainer, AboutTextContainer } from "./styles";
import Container from "../../components/Ui";

type Props = {
  abaAtiva: string;
  handleMudarAba: (aba: string) => void;
};

const AboutPage = (props: Props) => {
  return (
    <StyledContainer className={props.abaAtiva !== "about_me" ? "hidden" : ""}>
      <PageHeader>
        <PagePrimaryTitle>About Me</PagePrimaryTitle>
        <PageSecondaryTitle>Know more about myself</PageSecondaryTitle>
      </PageHeader>

      <Container handleMudarAba={props.handleMudarAba} containerSize="big">
        <div style={{ padding: "66px" }}>
          <Icon className="small" src={aboutMeIcon} alt="About Me" />
          <AboutImageAndTextContainer>
            <StyledContainer className="glass-effect image">
              <img src={aboutMeImage} alt="about me" />
            </StyledContainer>
            <PrimaryText>
              <span>R</span>afael, but you can call me Falves. I'm 22 years old
              and was born in Governador Valadares, building my life and career
              in Belo Horizonte, where I've lived since childhood. My passion
              for technology first emerged in my pre-teens, when I loved taking
              apart and reassembling electronics. This curiosity evolved into
              the challenge of optimizing and eventually building my own
              computers, which gave me a deep understanding of hardware.
            </PrimaryText>
          </AboutImageAndTextContainer>
          <AboutTextContainer>
            <PrimaryText>
              This foundation led me to work for almost five years as a{" "}
              <b>Web Designer and Graphic Designer</b> at D2F Comunicação.
              There, I had the opportunity to develop my soft skills, learning
              to work in a team and delegate tasks, especially after taking on
              the role of supervisor. My best friend and constant companion is
              my dog, Teko. He reminds me that life is made of simple moments of
              joy.
            </PrimaryText>
            <PrimaryText>
              Two years ago, I became firmly interested in the IT field and set
              a new career goal. Today, I'm finishing a{" "}
              <b>Full-Stack Java Developer</b> course and attending a{" "}
              <b>Computer Science</b> college program in person, as I believe
              it's the best way to improve my technical and interpersonal
              skills.
            </PrimaryText>
            <SecondaryText>
              <b>P.S.: </b>You can find a photo of my best friend, Teko, in the
              bottom-right corner of the page.
            </SecondaryText>
          </AboutTextContainer>
        </div>
      </Container>
    </StyledContainer>
  );
};

export default AboutPage;
