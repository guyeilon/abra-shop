import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: #1c1c1c;
   font-family: 'Assistant', sans-serif;
    font-size:24px ;
    margin: 0;
    line-height: 1;
    overflow: hidden;
  }

  nav{
     background: ${({ theme }) => theme.colors.header};
     font-size: 20px;

  }

  h1{
     font-size: 40px;
     font-weight: bold;
     color: #1a223e;
     margin: 0;
  }

  button {
    background-color: ${({ theme }) => theme.button.bgColor};
    color: ${({ theme }) => theme.button.textColor};
    &:hover {
		background-color:  ${({ theme }) => theme.button.hoverBgColor};
		color: ${({ theme }) => theme.button.hoverTextColor};
	  }


  }

  
    






`;

export default GlobalStyles;
