import React from 'react';
import { useParams} from 'react-router-dom';
 
import ProductDetailPage from "../../components/pages/ProductDetail";
import Error from "../../components/pages/Error";
import Image from "../../draws/About";

import {useScrollToTop} from "../../hooks/scroll";
import {useProduct} from "../../hooks/products";

const ProductDetail = () => {
  useScrollToTop();
  const {slang} = useParams();
  const product =useProduct({slang});

  if(!product){
    return <Error 
      title="Serviço não encontrado"
      description ="Serviço não encontrado ou não disponivel"
      image={<Image />}
    />
  }

    return <ProductDetailPage product = {product} />

}

export default ProductDetail;