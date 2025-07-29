import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&display=swap');

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: ${(props) => props.theme.font.body};
}

`;
