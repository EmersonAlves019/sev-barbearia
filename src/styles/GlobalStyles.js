import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --main-color: #8d785c;
    --color-secondary: white;
    --main-darker: #3c2915;
    --dark: rgb(36, 36, 36);
    --light: #f4eee7;
    --red: red;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  body { 
    font-family: 'Poppins', sans-serif;

    
    h2 {
    font-weight: 400;
    font-size: 60px;
    }
  }

`