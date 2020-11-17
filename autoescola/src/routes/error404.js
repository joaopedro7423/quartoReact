import React from "react";
import PropTypes from "prop-types";
       
import Error from "../components/pages/Error";
import TakenImage from "../draws/Speed";


const error404 = () => (
    <Error
    image={<TakenImage />}
    title="Página não encontrada!!"
    description=" Ops! não foi possivel encontrar a página"
   ></Error>       
);


       
export default error404;