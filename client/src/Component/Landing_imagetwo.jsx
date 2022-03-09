import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
const Container= styled.div`
background: url('https://media.osmology.co/wp-content/uploads/2017/01/28160832/Smoke-Musk-Scented-Candle-by-Earl-of-East-London191-SQR-768x768.jpg') 50% no-repeat;
background-size: cover;
text-align: center;
align-items: center;
justify-content: center;
display:block;
height: 800px;

@media only screen and (max-width:800px){
    
    height:600px;
  }

`



const Button= styled.button`
border:none;
padding: 10px;
border-radius: 15px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
font-size:40px;
@media only screen and (max-width:800px){

    font-size:20px;
  }
  transition:all 0.5s ease;
&:hover{
    background-color:black;
    color:gold;
}
`
const Info= styled.div`
color:white;
align-items:center;
justify-content:center;
position: absolute;
width:100%;
height:100%;
top:400px;
left:0;
`
const Title= styled.h1`
color:white;
margin-bottom:20px;

font-size:40px;


@media only screen and (max-width:800px){
    
    font-size:20px;
  }

`


const Landing_imagetwo= () => {
  return (
   <Container>
     <Info>
           <Title>OneCandles bringing you the manliest candles</Title>
           <Link to = "/products/candle">
           <Button>SHOP HERE</Button>
           </Link>
        </Info>
   </Container>
  );
};

export default Landing_imagetwo;
