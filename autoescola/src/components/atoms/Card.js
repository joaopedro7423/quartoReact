import React, { Children } from "react";
import PropTypes from "prop-types";

import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import styled from "styled-components";

const Root = styled.div`
  background-color: #fff;
  border-radius: 40px;
  overflow: hidden;
`;

const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaulProps = {
    children: undefined,
};
CardBody.propTypes = {
    children: PropTypes.node,
};


const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image }) => <StyledMedia image={image} />;

CardMedia.defaulProps = {
    image: undefined,
};
CardMedia.propTypes = {
    image: PropTypes.string,
};

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;



Card.defaulProps = {
    children: undefined,
};
Card.propTypes = {
    children: PropTypes.node,
};

export default Card;
