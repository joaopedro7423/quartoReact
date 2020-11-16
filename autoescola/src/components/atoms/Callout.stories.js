import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "../atoms/Button";
import SpeedImage from "../../draws/Speed";

export default {
  title: "Components|Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
        <h6>Faça sua matricula agora mesmo men, confia.</h6>
        <p>Ele rato, ela, se mata, ele sdkajlsnalndlasjjfaslçudhbfuladsh dusa
            dsaghusdhughlsduagnluduasgulbgasdklbgkdasbgldsa
            asdiulbhgibadshibdiusaguklbhdsuahbgklçsdabg
            sdjaklasdghjlnhasdsadsaldkasmmdmsaçd
            Achumalaka kkkkkkkkkkkkkdsal çdlsanildnlasnidl nsal nldasnl daslkudbhigfyuykaaal gtl 

        </p>
    <CalloutActions></CalloutActions>
        <Button color="primary">Matricular</Button>
    </CalloutBody>
    <CalloutMedia>
        <SpeedImage></SpeedImage>
    </CalloutMedia>
  </Callout>
);
