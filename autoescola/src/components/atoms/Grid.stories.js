import React from "react";
import styled from "styled-components";

import Grid from "./Grid";

export default{
title: "Components|Atoms/Grid",
  component: Grid
};

const Box = styled.div`
    height: 200px;
    background-color: black;
`;

export const usage = () =>(
   <Grid sm={2} md={4}>
       <Box></Box>
       <Box></Box>
       <Box></Box>
       <Box></Box>
       <Box></Box>
       <Box></Box>
       <Box></Box>
       <Box></Box>
       
       

   </Grid>
)