import {
  BlueElipse,
  Container,
  Content,
  GreenElipse,
  OrangeElipse,
} from "./styles";

type Props = {
  children?: React.ReactNode;
  className: string;
};

const Background = (props: Props) => {
  return (
    <Container>
      <OrangeElipse className={props.className} />
      <BlueElipse className={props.className} />
      <GreenElipse className={props.className} />
      <Content>{props.children}</Content>
    </Container>
  );
};

export default Background;
