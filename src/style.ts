import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.bantam};
`;
