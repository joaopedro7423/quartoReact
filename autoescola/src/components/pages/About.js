import React from "react";
import PropTypes from "prop-types";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Grid from "../atoms/Grid";
import Footer from "../organisms/Footer";

import fundo from "../../../src/assets/dogefundo.jpg";
import AboutImage from "../../draws/About";

import styled from "styled-components";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={fundo}>
      <Heading>
        <h1> Auto meme Nardoni</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            jshadjnkjsan so pq eu subi em um onibus naso qwdwisdm qeuaslnsa
            dnasidlaslidasldnaslnfl asfdosaoçfoasofopdsamfçdnmasfnçdlasnfçnd ad
            soifn iodasoifodasjfjio dçasjfilçdsjasdi iflçjsdilçjfasdji
            lçsdiajfçij asd fiçdsa j dsçajf sdkjfajkpdsiojf sdpj fpasjfipjdsaçfj
            çpsdjçfasdp fjsdjjfidsaijfjijadsj iasj ççsdaijf?
          </p>
          <p>
            jshadjnkjsan so pq eu subi em um onibus naso qwdwisdm qeuaslnsa
            dnasidlaslidasldnaslnfl asfdosaoçfoasofopdsamfçdnmasfnçdlasnfçnd ad
            soifn iodasoifodasjfjio dçasjfilçdsjasdi iflçjsdilçjfasdji
            lçsdiajfçij asd fiçdsa j dsçajf sdkjfajkpdsiojf sdpj fpasjfipjdsaçfj
            çpsdjçfasdp fjsdjjfidsaijfjijadsj iasj ççsdaijf?
          </p>
          <p>
            jshadjnkjsan so pq eu subi em um onibus naso qwdwisdm qeuaslnsa
            dnasidlaslidasldnaslnfl asfdosaoçfoasofopdsamfçdnmasfnçdlasnfçnd ad
            soifn iodasoifodasjfjio dçasjfilçdsjasdi iflçjsdilçjfasdji
            lçsdiajfçij asd fiçdsa j dsçajf sdkjfajkpdsiojf sdpj fpasjfipjdsaçfj
            çpsdjçfasdp fjsdjjfidsaijfjijadsj iasj ççsdaijf?
          </p>

          <ul>
            <li>sadasdasdjhas asdj haskjd sakhd sajd jkas dasj djkasj</li>
            <li>sadasdasdjhas asdj haskjd sakhd sajd jkas dasj djkasj</li>
            <li>sadasdasdjhas asdj haskjd sakhd sajd jkas dasj djkasj</li>
            <li>sadasdasdjhas asdj haskjd sakhd sajd jkas dasj djkasj</li>
            <li>sadasdasdjhas asdj haskjd sakhd sajd jkas dasj djkasj</li>
          </ul>
        </div>
        <div>
          <p>
            {" "}
            askldnkaskldlasklnmklndlasbh gsagidgisagidgaskuf uash ufhashfusakl
            fhuisafh wkqlfuhyigotlalçkgtui dhasgtuladshgkdasul hgasdukgl
            saduhgdsauhlg asduogh dasçhohg odishgo sd osdgio sog
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
        <Grid md={2}>
            <div>
                <h4>Missião kkk</h4>
                <p>Lorjasn asbdhkasbkfsa dkhasbndkbnaskndkas dasbndkasndknaskldndnkasklndkl uah gabgfiak kljasd hdsagklghuasdil ids ghdus </p>
            </div>
            <div>
            <h4>Pega a visão kkk</h4>
                <p>Lorjasn asbdhkasbkfsa dkhasbndkbnaskndkas dasbndkasndknaskldndnkasklndkl uah gabgfiak kljasd hdsagklghuasdil ids ghdus </p>
            
            </div>
        </Grid>
    </Section>

    <Section>
        <Heading>
            <h2>Conheça os nussu profisso kkk perdemo</h2>

        </Heading>
    </Section>
    <Footer />
  </>
);

About.defaulProps = {};
About.propTypes = {};

export default About;
