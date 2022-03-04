import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components"

const Container = styled.div`
display:flex;
background-color:#282728;
color:white;
`
const Left = styled.div`
flex:1;
flex-direction:column;
padding:15px;
`


const Right = styled.div`
flex:1;
@media only screen and (max-width:900px){
    
    font-size:11px;
  }

`
const Logo = styled.h1`
`
const Title=styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`

const ListItem= styled.li`
width: 50%;
margin-bottom:10px;
`
const SocialContainer = styled.div`
display:flex;
`

const Payment = styled.img`
width:50%;
`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
align-items:center;
justify-content:center;
display:flex;
margin-right:20px;

`

const Desc = styled.p`
margin:20px 0px;
`

const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-iems:center;
`


const Footer = () => {
  return (

    <Container>
     <Left>
         <Logo>OneCandles.</Logo>
         <Desc>
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         </Desc>
         <SocialContainer>
         <SocialIcon color="3B5999">
             <Facebook/>
         </SocialIcon>
         <SocialIcon color="55ACEE">
             <Twitter/>
         </SocialIcon>
         <SocialIcon color="E4405F">
             <Instagram/>
         </SocialIcon>
         <SocialIcon color="E60023">
             <Pinterest/>
         </SocialIcon>
     </SocialContainer>
     </Left>
     <Right>
    <Title>Contact</Title>
     <ContactItem>
      <Room style={{marginRight:"10px"}}/>
      Flixton Road 432, Manchester
     </ContactItem>
     <ContactItem>
      <Phone style={{marginRight:"10px"}}/>
      0777898374
     </ContactItem>
     <ContactItem>
      <MailOutline style={{marginRight:"10px"}}/>
      Contact@gmail.com
     </ContactItem>
     <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
     <Title>Useful Links</Title>
     <List>
      <ListItem>Order Tracking</ListItem>
      <ListItem>Terms</ListItem>
     </List>
     </Right>
    </Container>
  );
};

export default Footer;
