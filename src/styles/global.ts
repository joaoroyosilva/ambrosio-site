import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #1ba160;
  }

  body, input, button {
    font: 16px "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */

    &:hover {
          opacity: 0.6;
          color: inherit; /* blue colors for links too */
          text-decoration: inherit; /* no underline */
        }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
