import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakAt, BreakpointSize } from "../../styles/Breakpoints";
            
//#region CalloutBody
    const StyledCalloutBody = styled.div`
        flex:1; 
    h6,p{
            margin 0 0 8px;
        }
     `;
    
  export const  CalloutBody = ({children}) => (
    <StyledCalloutBody>{children}</StyledCalloutBody>
    );
     CalloutBody.defaulProps ={
    children: undefined,
    };
     CalloutBody.propTypes ={
    children: PropTypes.node,
    };
//#endregion

//#region CalloutActions
const StyledCalloutActions = styled.div`
    padding-top: 8px;
 `;

export const  CalloutActions = ({children}) => (
<StyledCalloutActions>{children}</StyledCalloutActions>
);
 CalloutActions.defaulProps ={
children: undefined,
};
 CalloutActions.propTypes ={
children: PropTypes.node,
};


//#endregion

//#region CalloutMedia
 const StyledCalloutMedia = styled.div`
    width: 30%;   
    display: none;

    ${breakAt(BreakpointSize.md)}{
        display: flex;
    }

    svg{
        color: ${(props)=>props.theme.colors.primary.main};
        height: 100%;
        width: 100%;
        max-height: 200px;
    }
  `;
 
 export const  CalloutMedia = ({children}) => (
 <StyledCalloutMedia>{children}</StyledCalloutMedia>
 );
  CalloutMedia.defaulProps ={
 children: undefined,
 };
  CalloutMedia.propTypes ={
 children: PropTypes.node,
 };
//#endregion



//#region Callout
const StyledCallout = styled.div`
    display:flex;
    background-color: #fff;
    border: 1px solid ${(props)=>props.theme.colors.border};
    border-left: 3px solid ${(props)=>props.theme.colors.primary.main};
    border-radius: 4px;
    padding: 16px;
    `;
       
const Callout = ({children}) => (
       <StyledCallout>{children}</StyledCallout>
);
Callout.defaulProps ={
   children: undefined,
};
Callout.propTypes ={
       children: PropTypes.node,  
};
       
       
export default Callout;

//#endregion