import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *,
    *::after,
    *::before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.font.primaryFont};
      font-weight: 400; 
      transition: all ease-out 200ms;
    }

    html {
      font-size: 62.5%;
    }

    img {
      width: 100%;
    }

    main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 10rem ;
      padding-bottom: 1rem;

      @media screen and (max-width: 425px) {
        padding-top: 5rem;
      }
    }

    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3rem;
    }

    input {
      background: none;
      outline: none;
      border: none;
    }

    h1 {
      font-size: 5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.white};
    }

    ul,li {
      list-style: none;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      
      @media screen and (max-width: 425px) {
        max-width: 350px;
      }
    }
`;
