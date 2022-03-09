import { ShoppingBasketOutlined, Search  } from '@material-ui/icons';
import {logOut} from "../redux/userRedux"
import React from 'react';
import styled from "styled-components"
import { Badge } from "@material-ui/core"
import { mobile } from "../responisive"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container=styled.div`
height:60px;
background-color:black;
color:white;


`
const Language=styled.div`
font-size:14px;
cursor:pointer;
@media only screen and (max-width:900px){

  display:none;
}
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:space-between;
margin-right:5%;
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Input = styled.input`
border:none;
color:white;
background-color:black;
@media only screen and (max-width:900px){

  width:30px;
}
`
const Logo = styled.h1`
font-weight:bold;
padding:3%;
@media only screen and (max-width:900px){
  padding:1%;
  font-size:20px;
}
cursor:pointer;
transition:all 0.5s ease;
color:white;
&:hover {
    color:#DAA520;
    transform: scale(1.1);
}


`

const MenuItem = styled.div`
font-size:14px;
margin-left: 25px;
font-weight:600;
color:white;
transition:all 0.5s ease;
cursor:pointer;
&:hover {
    color:#DAA520;
    transform: scale(1.1);
}
@media only screen and (max-width:430px){

  font-size:10px;
  margin-left:20px;
}

`
const HMenuItem = styled.div`
font-size:14px;
margin-left: 25px;
font-weight:600;
color:white;
transition:all 0.5s ease;
cursor:pointer;
&:hover {
    color:#DAA520;
    transform: scale(1.1);
}
@media only screen and (max-width:430px){

  font-size:10px;
}

`
const SubMenuItem = styled.div`
font-size:14px;
margin-left: 25px;
font-weight:600;
color:white;
transition:all 0.5s ease;
cursor:pointer;
&:hover {
    color:#DAA520;
    transform: scale(1.1);
}
@media only screen and (max-width:900px){

  display:none;
}
`

const Right = styled.div`
flex:1;
display flex;
align-items:center;
justify-content:flex-end;
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
color:black;
background-color:black;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
visibility:hidden;
@media only screen and (max-width:430px){

  display:none;
}

`

const Navabar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const dispatch= useDispatch();
  const handleClick = (e) =>{
    e.preventDefault();
    dispatch(logOut())
  }
  
  
  return(
  
  <Container>
   <Wrapper>
       <Left>
        <Language>EN</Language>
        <Link to ="/" style={{ textDecoration: 'none' }} >
           <HMenuItem>Home</HMenuItem>
           </Link>
           <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
           <MenuItem>About Us</MenuItem>
           </Link>
           
         <SearchContainer>
         
            <Search style={{color:"gray",fontSize:16}}/>
            <Input/>
         </SearchContainer> 
           
       </Left>
       <Link to ="/" style={{ textDecoration: 'none' }}>
       <Center><Logo>OneCandles.</Logo></Center>
       </Link>
       <Right>
            <Link to ="/products/candle" style={{ textDecoration: 'none' }} >
           <SubMenuItem>Candles</SubMenuItem>
           </Link>
           
           <Link to ="/products/diffuser" style={{ textDecoration: 'none' }}>
           <SubMenuItem>Diffusers</SubMenuItem>
           </Link>
           <Link to ="/products/incense" style={{ textDecoration: 'none' }}>
           <SubMenuItem>Incense</SubMenuItem>
           </Link>
           
            
            
    
           <MenuItem>
           <Link  style={{ textDecoration: 'none', right: "10px" }} to="/cart">
           <Badge badgeContent={quantity} color="primary"style={{ color: 'gold' }}>
            <ShoppingBasketOutlined/>   
           </Badge>
           </Link>
           </MenuItem>



       </Right>
   </Wrapper>
  </Container>
  );
};

export default Navabar;

