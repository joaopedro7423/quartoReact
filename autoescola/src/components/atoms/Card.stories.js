import React from "react";

import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "../molecules/Section";

import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

import PlaceholderImage from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/edinaldo.jpg" 


export default {
  title: "Components|Atoms/Card",
  component: Card,
  subcomponents: {CardBody, CardMedia, CardMediaDescription},
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>s,landbska jksbdakbaskb bkasb kbdkbas k</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>s,landbska jksbdakbaskb bkasb kbdkbas k</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage}>
      <CardMediaDescription>
        <h2>sadasd</h2>
      </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
);