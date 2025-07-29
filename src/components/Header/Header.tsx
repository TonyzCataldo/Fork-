import Button from "../Button/Button";
import Input from "../Input/Input";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.InputContainer>
        <Button>btn header</Button>
        <Input />
      </S.InputContainer>
    </S.Header>
  );
};
export default Header;
