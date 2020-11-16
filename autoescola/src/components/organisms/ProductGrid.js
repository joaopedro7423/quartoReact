import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {useScrollToTop} from "../../hooks/scroll";

import Grid from "../atoms/Grid";
import Card, { CardMedia, CardBody } from "../atoms/Card";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import styled from "styled-components";



const Toolbar = styled.div`
margin-top: 40px;
text-align: center;
`;

const ProductGrid = ({products}) => {
    //isso serve para mostrar 3, caso clike no botao é mostrado todos
    const [showAll, setShowAll] = useState(false);
    const filteredProducts = showAll ? products: products.slice(0, 3);
   


    return (
    <>
  <Grid md={3}>
    {filteredProducts.map((product) => (
      <Card key ={product.id}>
        <CardMedia image={product.image} />
        <CardBody>
          <Heading>
              <h6>{product.title}</h6>
          </Heading>
              <p>{product.summary}</p>
          <div>
            <Button as={Link} to="/servicos" color="primary" variant="link">
              Saiba mais
            </Button>
          </div>
        </CardBody>
      </Card>
    ))}
  </Grid>
  {!showAll && (<Toolbar>
      <Button variant="outlined"
        onClick ={()=>{
            setShowAll(true)
        }}
      >Lista completa de serviços</Button>
  </Toolbar>)}
  </>
    );
};


ProductGrid.defaulProps = {
    products: [],
};
ProductGrid.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
            image:PropTypes.string,
            title:PropTypes.string,
            summary: PropTypes.string,
        })

    ),
    
};

export default ProductGrid;
