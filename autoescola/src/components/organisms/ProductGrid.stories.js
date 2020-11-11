import React from "react";

import ProductGrid from "./ProductGrid";
import PlaceholderImage from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/edinaldo.jpg" 


export default {
  title: "Components|Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid products={[
  {id: 1, image: PlaceholderImage ,title: "Titulo",summary:"Texto"},
  {id: 2 , image: PlaceholderImage,title: "Titulo",summary:"Texto"},
  {id: 3 , image: PlaceholderImage,title: "Titulo",summary:"Texto"},
  {id: 4, image: PlaceholderImage ,title: "Titulo",summary:"Texto"},
  {id: 5 , image: PlaceholderImage,title: "Titulo",summary:"Texto"},
  {id: 6 , image: PlaceholderImage,title: "Titulo",summary:"Texto"},
  {id: 7, image: PlaceholderImage ,title: "Titulo",summary:"Texto"},
 

]}
 />
);
