import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from "styled-components"
import { publicRequest } from "../requestMethods";
const Error= styled.span`
color:red;

`


const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuVFIudUP7y4vBmHYoUIflvIOrq9EaMie8Q&usqp=CAU");

display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
padding:20px;
width:40%;
background-color:white;
`
const Title= styled.h1`
font-size:24px;
font-weight:300;
`
const  Form = styled.form`
display:flex;
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;

`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`


const Register = () => {

  const [Username,setUsername] = useState("")
  const [Password,setPassword] = useState("")
  const [Email,setEmail] = useState("")

  const handleClick = () =>{
    publicRequest.post("/auth/register",{username:Username,email:Email,password:Password})
    
    
    
  }

  return (
  <Container>
     <Wrapper>
       <Title>CREATE AN ACCOUNT</Title>
       <Form>
          <Input placeholder="username"
          
          onChange={(e) => setUsername(e.target.value)}/>

          <Input placeholder="email"
          onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}/>
          <Input placeholder="confirm password"
          type="password"/>

          <Agreement>By creating an account, I consent to the processing of my personal 
            data in accordance with the <b> Piracy policy</b>
          </Agreement>
          
          <Button onClick={handleClick}>Create account</Button>
          
       </Form>
     </Wrapper>
  </Container>
  );
};

export default Register;
