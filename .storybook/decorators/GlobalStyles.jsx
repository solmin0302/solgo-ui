import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  #root {
    background-color: cornflowerblue
  }
`;

export default (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
