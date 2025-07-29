import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background-color: ${(props) => props.theme.colors["neutral-300"]};
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors["neutral-700"]};
`;
