import React from "react";
import Button from "./Button";
import { actions } from "@storybook/addon-actions";
import styled from "styled-components";

export default {
  title: "Components|Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;



export const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...props} {...events}>Default</Button>
      <Button color="primary" {...props} {...events}>
        {" "}
        Primary{" "}
      </Button>
      <Button color="danger" {...props} {...events}>
        {" "}
        Danger{" "}
      </Button>
    </Toolbar>
    <p>As a Link</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>Default</Button>
      <Button as="a" href="#" color="primary" {...props} {...events}>  
        Primary
      </Button>
      <Button as="a" href="#" color="danger" {...props} {...events}>
        Danger      
      </Button>
    </Toolbar>

    <p>Disable:</p>
    <Toolbar>
      <Button disabled {...props} {...events}>
        Default
      </Button>
      <Button disabled color="primary" {...props} {...events}>
        {" "}
        Primary{" "}
      </Button>
      <Button disabled color="danger" {...props} {...events}>
        {" "}
        Danger{" "}
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => (
<ButtonsWrapper />
);


export const outlined = () => (<ButtonsWrapper variant="outlined" />
 
);



export const link = () => ( <ButtonsWrapper variant="link" />
);
