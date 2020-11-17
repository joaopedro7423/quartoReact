import React from "react";

import Error from "./Error";
import speedimage from "../../draws/Speed";

export default{
title: "Components|Pages/Error",
  component: Error
};

export const usage = () =>(
   <Error
    image={<speedimage />}
    title="Página não encontrada!!"
    description="não foi possivel encontrar a página"
   ></Error>
)