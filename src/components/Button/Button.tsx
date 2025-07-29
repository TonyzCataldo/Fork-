import * as S from "./styles";

type ButtonProps = {
  children: string;
  crazy?: boolean;
};

const Button = ({ children, crazy }: ButtonProps) => {
  return <S.Button crazy={crazy}>{children}</S.Button>;
};
export default Button;
