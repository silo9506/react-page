import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
       box-sizing: border-box;
       list-style: none;
     };
    a{
         text-decoration:none;
         color:inherit;
     };
     body{ font-size:14px; font-family: 'Gowun Batang', serif; overflow-x:hidden;};
     h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0;
     }
     `;

export default GlobalStyles;
