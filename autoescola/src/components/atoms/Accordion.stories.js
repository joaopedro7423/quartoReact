import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default{
title: "Components|Atoms/Accordion",
  component: Accordion
};

export const usage = () =>(
    <>
   <Accordion title="Como eu espanco um e-gril na porrada">dasklkdaskdk
   saidhasdnhas nsdanhunhsauinduilnasuilndiuasilubfilua siub ibfasi uisbaibfiasb ibf isbabf ibasifbasib fibasibfi bdaskbgfads bbasb
   saidjjasdm inmaisnd judeu asdnklasnln</Accordion>

    </>
);

export const witchGroup = () =>(
    <AccordionGroup>
    <Accordion title="Como eu espanco um e-gril na porrada">dasklkdaskdk
    saidhasdnhas nsdanhunhsauinduilnasuilndiuasilubfilua siub ibfasi uisbaibfiasb ibf isbabf ibasifbasib fibasibfi bdaskbgfads bbasb
    saidjjasdm inmaisnd judeu asdnklasnln</Accordion>
 
    <Accordion title="Como escapar do meu agiota?">dasklkdaskdk
    saidhasdnhas nsdanhunhsauinduilnasuilndiuasilubfilua siub ibfasi uisbaibfiasb ibf isbabf ibasifbasib fibasibfi bdaskbgfads bbasb
    saidjjasdm inmaisnd kkk me lasquei nessa asdnklasnln</Accordion>
 
    <Accordion title="ser Veveco por 20 conto da lucro?">dasklkdaskdk
    saidhasdnhas nsdanhunhsauinduilnasuilndiuasilubfilua siub ibfasi uisbaibfiasb ibf isbabf ibasifbasib fibasibfi bdaskbgfads bbasb
    saidjjasdm inmaisnd renda extra po, confia asdnklasnln</Accordion>
 
     </AccordionGroup>
 );
