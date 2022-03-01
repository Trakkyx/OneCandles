import {css} from "styled-components"
import React from "react"


export const mobile = (props) =>{
    return css`
    @media only screen and (max-wdith: 380px){
     ${props}

    }
    `;
};

export const tablet = (props) =>{
    return css`
    @media only screen and (max-wdith: 380px){
     ${props}

    }
    `;
};