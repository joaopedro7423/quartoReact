import React from 'react';
import { ThemeProvider as StyledProvider } from "styled-components";


const theme ={
    //aqui se define a cor e manda lá na função button dos components
    colorYellow: "#ffc107",
  };
  

const ThemeProvider=({children})=>(
<StyledProvider theme={theme}>
    {children}
</StyledProvider>
);

export default ThemeProvider;