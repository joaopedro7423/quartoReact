import React from "react";
import PropTypes from "prop-types";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "../atoms/Container";
import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";
import styled from "styled-components";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
  }
`;
const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  display: block;
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover{
      color: ${(props) => props.theme.colors.primary.dark};
  }

`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nardone Auto Escola</h6>
          </Heading>
          <p>
            asdasdasdasdas asdasda sasdas asjkdhjashdk kashdkhaskdk sakkd sakndk
            nasjkd{" "}
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contato</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (69) 69696969
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            asdasdasdas das d asdsa dsa dasd as ddjklashdjk
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <FooterLink target="_blank" href="">
            <IconContainer>
              <FaFacebookF />
            </IconContainer>
            Facebook
          </FooterLink>

          <FooterLink target="_blank" href="">
            <IconContainer>
              <FaLinkedinIn />
            </IconContainer>
            LinkedIn
          </FooterLink>

          <FooterLink target="_blank" href="">
            <IconContainer>
              <FaTwitter />
            </IconContainer>
            Twitter
          </FooterLink>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
