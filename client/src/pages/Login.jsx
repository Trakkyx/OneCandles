import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import { login } from '../redux/apiCalls';

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

const Link =styled.a`
cursor:pointer;
text-decoration:underline;
font-size:12px;
margin:5px 0;
`
const Wrapper = styled.div`
padding:20px;
width:25%;
background-color:white;
`
const Title= styled.h1`
font-size:24px;
font-weight:300;
`
const  Form = styled.form`
display:flex;
flex-direction:column;
`
const Input = styled.input`
flex:1;
min-width:25%;
margin:10px 0;
padding:10px;

`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
&:disabled{
  color:green;
  cursor:not-allowed;
}
`
const Error= styled.span`
color:red;

`

const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch=useDispatch()
  const { isFetching, error} = useSelector((state) => state.user);

  const handleClick = (e) =>{
    e.preventDefault()
    login(dispatch, {username, password});
  }
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
   
         <Input placeholder="username"
                 onChange={(e) => setUsername(e.target.value)}/>
         <Input placeholder="password"
                 type="password"
                 onChange={(e) => setPassword(e.target.value)}/>
                 
         <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
         {error && <Error>Something went wrong</Error>}
         <Link>Do you not remember your password?</Link>
         <Link>Create an account</Link>
      </Form>
    </Wrapper>
 </Container>
  );
};

export default Login;
