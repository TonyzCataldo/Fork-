import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors["dark-blue"]};
  color: ${(props) => props.theme.colors["neutral-200"]};
`;
