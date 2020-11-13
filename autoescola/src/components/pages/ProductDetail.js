import React from "react";
import PropTypes from "prop-types";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Grid from "../atoms/Grid";
import Footer from "../organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "../atoms/Card";
import Callout, {
  CalloutActions,
  CalloutBody,
  CalloutMedia,
} from "../atoms/Callout";
import Button from "../atoms/Button";
import SpeedImage from "../../draws/Speed";

import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import fundo from "../../../src/assets/dogefundo.jpg";
import styled from "styled-components";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

svg{
    margin-right: 8px;
    vertical-align: middle;
}

`;

const ProductDetail = () => (
  <>
    <Hero image={fundo}>
      <Heading>
        <h1>Nome do Serviço</h1>
      </Heading>
    </Hero>
    <Section>
      <p>
        asdjsah jknasknduknask dasbdkasb kfsabyfbsakjbfjkbask bfbysakbbjkasb
        fjbsakbfjkasb ybfk asybfkbask bjbfasjk bjfb asdjsahas fh uoashho asfu
        huoh sauohfuoash holfha suohfuo hasohfuohsal lhueuh alwufh alhf
      </p>
      <p>
        asdjsah jknasknduknask dasbdkasb kfsabyfbsakjbfjkbask bfbysakbbjkasb
        fjbsakbfjkasb ybfk asybfkbask bjbfasjk bjfb asdjsahas fh uoashho asfu
        huoh sauohfuoash holfha suohfuo hasohfuohsal lhueuh alwufh alhf
      </p>
      <p>
        asdjsah jknasknduknask dasbdkasb kfsabyfbsakjbfjkbask bfbysakbbjkasb
        fjbsakbfjkasb ybfk asybfkbask bjbfasjk bjfb asdjsahas fh uoashho asfu
        huoh sauohfuoash holfha suohfuo hasohfuohsal lhueuh alwufh alhf
      </p>

      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidao de nacimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residencia
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matricula agora mesmo men, confia.</h6>
          <p>
            Ele rato, ela, se mata, ele sdkajlsnalndlasjjfaslçudhbfuladsh dusa
            dsaghusdhughlsduagnluduasgulbgasdklbgkdasbgldsa
            asdiulbhgibadshibdiusaguklbhdsuahbgklçsdabg
            sdjaklasdghjlnhasdsadsaldkasmmdmsaçd Achumalaka kkkkkkkkkkkkkdsal
            çdlsanildnlasnidl nsal nldasnl daslkudbhigfyuykaaal gtl
          </p>
          <CalloutActions></CalloutActions>
          <Button color="primary">Matricular</Button>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage></SpeedImage>
        </CalloutMedia>
      </Callout>
    </Section>
  </>
);
ProductDetail.defaulProps = {};
ProductDetail.propTypes = {};

export default ProductDetail;
