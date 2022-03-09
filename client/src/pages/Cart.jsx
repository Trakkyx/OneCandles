import React, { useState } from 'react';
import Annoncement from '../Component/Annoncement';
import Footer from '../Component/Footer';
import Navabar from '../Component/Navabar';
import styled from "styled-components"
import { Add, Remove, RemoveCircle } from '@material-ui/icons';
import { mobile } from  "../responisive"
import {useDispatch, useSelector} from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { ClearCart } from '../redux/cartRedux';
import { Link } from 'react-router-dom';
import Slider from '../Component/Slider';
import Products from '../Component/Products';
import Upsale from '../Component/Upsale';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
height: 60px;


`
const Wrapper = styled.div`
padding:20px;
@media only screen and (max-width:732px){
  
  padding:10px;
  
}
`
const Title= styled.h1`
font-weight:300;
text-align:center;
`
const Top= styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"}; 
`

const TopTexts = styled.div``
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Bottom= styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width:400px){
  
  display:block;
  
  
}


`
const Info= styled.div`
flex:3;


`
const Summary= styled.div`
flex :1;
border: 0.5px solid lightgray;
border-radius:10px;
padding:10px;
height:60vh;
@media only screen and (max-width:732px){
  
  padding:5px;
  
  
}
@media only screen and (max-width:400px){
  
  display:block;
  
  
  
  
  
}



`
const Product = styled.div`
display:flex;
justify-content:space-between;
@media only screen and (max-width:732px){
  font-size:15px;
  
}

`
const ProductDetails = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
@media only screen and (max-width:732px){
  
    width:50px;
    height:50px;
    
  }
`
const Details = styled.div`
padding: 15px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const PriceDetails= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};

`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
@media only screen and (max-width:732px){
   font-size:15px;
  }
`
const ProductPrice =styled.div`
font-size:30px;
font-weight:200;
@media only screen and (max-width:732px){
  
   font-size:15px;
    
  }
`
const Hr= styled.hr`
background-color:#eee;
border:none;
height:1px;
`
const SummaryText =styled.span``
const SummaryItem =styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};
@media only screen and (max-width:732px){
  

  margin:15px 0px;
  
}



`
const Button =styled.button`
width: 100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
cursor:pointer;

`
const SummaryPrice =styled.span``
const SummaryTitle =styled.h1`
font-weight:200;
font-size:30px:
@media only screen and (max-width:732px){
  

    font-size:5px;
    
  }
`



const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToke, setStripeToken] = useState(null);
    const onToken = (token) => {
    setStripeToken(token);
    };
    const dispatch = useDispatch();
    const handleClick = (e) =>{
        //update cart
        e.preventDefault();
        dispatch(ClearCart());
        
        };
    

  return (
  <Container>
  <Navabar/>
  <Annoncement/>
  <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <Link to ="/">
        <TopButton>Continue Shopping</TopButton>
        </Link>
        <TopButton onClick={handleClick} type="filled">Clear Cart</TopButton>
      </Top>
      <Bottom>
          <Info>
            
              {cart.products.map(product=>(

              <Product>
                  <ProductDetails>
                      <Image src={product.img}/>
                      <Details>
                          <ProductName><b>Product:</b>{product.title}</ProductName>
                          <ProductId>{product.id}</ProductId>
                          <ProductColor color={product.color}/>
                          <ProductSize><b>Size:</b>{product.size}</ProductSize>
                        
                      </Details>
                      
                  </ProductDetails>
                  <PriceDetails>
                      <ProductAmountContainer>
                          
                          <ProductAmount>{product.quantity}:<b>Item</b></ProductAmount>
                         
                      </ProductAmountContainer>
                      <ProductPrice>£{product.price}</ProductPrice>
                  </PriceDetails>
              </Product>
              ))}
              <Hr/>
          </Info>
        <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>£{cart.total}</SummaryPrice>
              </SummaryItem>
              <SummaryItem>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>£5</SummaryPrice>
              </SummaryItem>
              <SummaryItem>
              <SummaryText>Shipping Discount</SummaryText>
              <SummaryPrice>£-5</SummaryPrice>
              </SummaryItem>
              <SummaryItem  type="total">
              <SummaryText>Total</SummaryText>
              <SummaryPrice>£{cart.total}</SummaryPrice>
              </SummaryItem>
              <StripeCheckout
              name="Candles Shop"
              billingAddress
              shippingAddress
              description={`Your total is £${cart.total}`}
              amount={cart.total*100}
              token={onToken} 
              stripekey={KEY}
               >
              <Button>CHECKOUT</Button>
              </StripeCheckout>
          </Summary>
      </Bottom>
 </Wrapper>
 <Upsale/>
 <Products cat={"candle"}/>
  <Footer/>
  </Container>
  );
};

export default Cart;
