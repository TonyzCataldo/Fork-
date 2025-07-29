import styled from "styled-components";

type StyledButtonProps = {
  crazy?: boolean;
};

export const Button = styled.button<StyledButtonProps>`
  padding: ${(props) => props.theme.spacing["super-bantam"]};
  width: 100%;
  color: ${(props) => props.theme.colors["neutral-600"]};
  background-color: ${(props) => props.theme.colors["pastel-red"]};
  font-size: 1rem;
  font-family: ${(props) =>
    props.crazy ? props.theme.font.crazy : props.theme.font.body};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors["light-red"]};
  }
`;
