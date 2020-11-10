import React from "react";
import PropTypes from "prop-types";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Container from "../atoms/Container";

import HeroImage from "C:/Users/user/Desktop/quartoReact/autoescola/src/assets/user.jpg";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "../molecules/Section";


const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong> <br />
          para ir e vir.
        </h1>
      </Heading>
      <ul>
        <li>dsadasdasdsaaaaaaaaaasdasdaskfhasuhfbhasuhfu</li>
        <li>dilasln sand nas ndnas ndasn ndasnjkd njkasd</li>
        <li>
          sakldjklsak dnm ksamdklmaslmdlkmasmdnmslam klm lasmmlasmdklm alsml m
        </li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <br></br>

 <Section>

    <Grid sm={2} md={4}>
      <Feature icon={<FaCar />} title="Maior e melhor frota">
        <p>Loejlmrl,awdm kmasmdkmaskmd</p>
      </Feature>
      <Feature icon={<FaKey />} title="Habilitação mais rápida">
        <p>Loejlmrl,awdm kmasmdkmaskmd</p>
      </Feature>
      <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
        <p>Loejlmrl,awdm kmasmdkmaskmd</p>
      </Feature>
      <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
        <p>Loejlmrl,awdm kmasmdkmaskmd</p>
      </Feature>
    </Grid>
    </Section>
  </>
);

//Home.defaulProps ={};
//Home.PropTypes ={};

export default Home;
