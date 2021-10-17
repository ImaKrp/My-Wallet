import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

*:focus {
  outline-style: none;
}

html {

  --success: ${props => props.theme.color.success};
  --info: ${props => props.theme.color.info};
  --warning: ${props => props.theme.color.warning};

  --card-success: ${props => props.theme.color.card_success};
  --card-info: ${props => props.theme.color.card_info};
  --card-warning: ${props => props.theme.color.card_warning};

  --primary: ${props => props.theme.color.primary};
  --secondary: ${props => props.theme.color.secondary};
  --terciary: ${props => props.theme.color.terciary};

  --text: ${props => props.theme.color.text};

  --focus: ${props => props.theme.color.focus};

  --card: ${props => props.theme.color.card};

  --white: ${props => props.theme.color.white};
  --black: ${props => props.theme.color.black};
  --gray: ${props => props.theme.color.gray};

  font-size: 62.5%;

  scroll-behavior: smooth;
}

body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

* {
  font-family: 'Roboto', sans-serif;
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

button, a, select {
  cursor: pointer;
}

h1, h2, h3, h4, h5, h6, span, p{
  cursor: default;
}
`;
