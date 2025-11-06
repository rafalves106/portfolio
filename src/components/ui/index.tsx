import { CloseButton, StyledContainer } from "./styles";

type Props = {
  children?: React.ReactNode;
  containerSize?: "small" | "medium" | "big" | "image" | "logo";
  containerType?: "glass-effect" | "border" | "icon";
  onClick?: () => void;
  handleMudarAba: (aba: string) => void;
};

const Container = (props: Props) => {
  const baseType = props.containerType || "glass-effect";
  const classes = `${baseType} ${props.containerSize || ""}`.trim();
  return (
    <StyledContainer className={classes} onClick={props.onClick}>
      <CloseButton onClick={() => props.handleMudarAba("menu")} />
      {props.children}
    </StyledContainer>
  );
};

export default Container;
