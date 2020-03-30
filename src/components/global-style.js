import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    background: #21222d;
  }
  body{
    height: 100vh;
    background: linear-gradient(to right bottom, #2f3441 50%, #21222d 50%);
  }
  h1, h2, h3, h4, h5, h6, p, small, li{
    color: #fbf1c7;
  }
  a {
    color: #99C6CA;
  }
`;
