import { Container, Content } from "./styles";

type Props = {
  children?: React.ReactNode;
  className: string;
};

const Background = (props: Props) => {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default Background;
