import React from "react";

import BreadCrumb from "./BreadCrumb";

export default{
title: "Components|Atoms/BreadCrumb",
  component: BreadCrumb
};

const items = [
    {label:"Início", link:"/"},
    {label: "Sobre", link:"/sobre"},
]

export const usage = () =>(
   <BreadCrumb items={items}></BreadCrumb>
)