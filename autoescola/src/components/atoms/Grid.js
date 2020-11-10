import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
       
import { breakAt, BreakpointSize } from "C:/Users/user/Desktop/quartoReact/autoescola/src/styles/Breakpoints.js";

const Grid = styled.div`
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr;

    ${breakAt(BreakpointSize.sm)}{
        grid-template-columns: repeat(${(props) => props.sm}, 1fr);
    }
    ${breakAt(BreakpointSize.md)}{
        grid-template-columns: repeat(${(props) => props.md}, 1fr);
    }
    ${breakAt(BreakpointSize.lg)}{
        grid-template-columns: repeat(${(props) => props.lg}, 1fr);
    }
    ${breakAt(BreakpointSize.xl)}{
        grid-template-columns: repeat(${(props) => props.xl}, 1fr);
    }
`;


Grid.defaulProps ={
    sm: undefined,
    md: undefined,
    lg: undefined,
    xl: undefined,
};

Grid.propTypes ={
         sm: PropTypes.number,
         md: PropTypes.number,
         lg: PropTypes.number,
         xl: PropTypes.number,
};
       
       
export default Grid;