import React from 'react';
import styled from "styled-components"
const Container= styled.div`
height:30px;
background-color:#282728;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
@media only screen and (max-width:900px){
    
  font-size:11px;
}
`

const Upsale = () => {
  return <Container>
      Checkout some of our best products below!
  </Container> ;

};

export default Upsale;
