import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
const Container= styled.div`
background-color:#282728;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:contain;
position:relative;
`
const Info= styled.div`
position: absolute;
width:100%;
height:100%;
top:600px;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
@media only screen and (max-width:1000px){

    top:60px;
  }

`
const Title= styled.h1`
color:white;
margin-bottom:20px;
text-align:center;
font-size:40px;
display:relative;

@media only screen and (max-width:800px){
    
    font-size:20px;
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


const Landing_image= () => {
  return (
   <Container>
     <Image src="https://media.osmology.co/wp-content/uploads/2017/01/28160832/Smoke-Musk-Scented-Candle-by-Earl-of-East-London191-SQR-768x768.jpg"/>
     <Info>
           <Title>OneCandles bringing you the manliest candles</Title>
           <Link to = "/products/candle">
           <Button>SHOP HERE</Button>
           </Link>
        </Info>
   </Container>
  );
};

export default Landing_image;
