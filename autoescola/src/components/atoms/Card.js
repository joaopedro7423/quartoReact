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
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image, children }) => (
  <StyledMedia image={image}> {children} </StyledMedia>
);

CardMedia.defaulProps = {
  image: undefined,
  children: undefined,
};
CardMedia.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
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

const StyledMediaDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
  color: #fff;
  align-self: flex-end;
  flex: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin: 0;
  }
`;

export const CardMediaDescription = ({ children }) => (
  <StyledMediaDescription>{children}</StyledMediaDescription>
);

CardMediaDescription.defaulProps = {
  children: undefined,
};
CardMediaDescription.propTypes = {
  children: PropTypes.node,
};
