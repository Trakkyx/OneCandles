import React from 'react';
import styled from "styled-components"
const Container= styled.div`
height:30px;
background-color:#282728;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size: 20px;
`

const Annoncement = () => {
  return <Container>
      Super Deal! Free Shipping on Orders over £50
  </Container> ;

};

export default Annoncement;
