import { Container } from "./style";

type Props = {
  children?: React.ReactNode;
  containerSize?: "small" | "big" | "image" | "logo";
  onClick?: () => void;
  goToMenu?: () => void;
};

const GlassContainer = (props: Props) => {
  return (
    <Container className={props.containerSize}>{props.children}</Container>
  );
};

export default GlassContainer;
