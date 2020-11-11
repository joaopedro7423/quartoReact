import React from "react";
import PropTypes from "prop-types";

import GlobalStyle from "C:/Users/user/Desktop/quartoReact/autoescola/src/styles/GlobalStyle.js";
import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Footer from "../organisms/Footer";
import ProductGrid from "../organisms/ProductGrid";

import AboutVideo from "C:/Users/user/Desktop/quartoReact/autoescola/src/assets/about.mp4";
import HeroImage from "C:/Users/user/Desktop/quartoReact/autoescola/src/assets/user.jpg";

import PlaceholderImage from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/edinaldo.jpg";
import PlaceholderImage2 from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/mineirinho.jpg";
import PlaceholderImage3 from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/miranha.jpg";
import PlaceholderImage4 from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/edinaldo.jpg";
import PlaceholderImage5 from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/edinaldo.jpg";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "../molecules/Section";

const products = [
  {
    id: 1,
    title: "Edinaldo Pereira",
    sumary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
    image: PlaceholderImage,
  },
  {
    id: 2,
    title: "Sabe vuá?",
    sumary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
    image: PlaceholderImage2,
  },
  {
    id: 3,
    title: "Singarro da curse",
    sumary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
    image: PlaceholderImage3,
  },
  {
    id: 4,
    title: "Edinaldo de novo",
    sumary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
    image: PlaceholderImage,
  },
  {
    id: 5,
    title: "asdasd",
    sumary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
    image: PlaceholderImage3,
  },
];

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
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nardoni Auto Escola</h2>
          </Heading>
          <p>
            A escola nardoni tem a melhor escola escola para escola para ensinar
            a escola para que um dia tenha uma escola para elcola novas escolas
          </p>
          <div>
            <Button color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Duvidas recorrentes</h2>
      </Heading>
    </Section>

    <Footer></Footer>
  </>
);

//Home.defaulProps ={};
//Home.PropTypes ={};

export default Home;
