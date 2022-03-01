import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"


const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
background-color:rbga(108, 122, 137, 0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
opacity:0;
color:purple;
transition:all 0.5s ease;
`

const Container = styled.div`
background-color: #3D3A3F;

flex:1;
margin:5px;
mid-width: 260px;
height:300px;
display:flex;
align-items:center;
justify-content:center;
position:relative;
&:hover ${Info}{
opacity:1;

}


`
const Image = styled.img`
height:75%;
background-color: #3D3A3F;


`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: white;
display: flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
cursor:pointer;
&:hover {
    background-color:#e9f5f5;
    transform: scale(1.1);
}

`

const Price = styled.div`
top:350px;
position:absolute;
font-size:15px;
color:white;
background-color:#282728;
z-index:3;

`
const Title = styled.div`
bottom:0;
position:absolute;
font-size:15px;
color:white;
background-color:#282728;

`
const Contained=styled.div`
background-color: #282728;
flex:1;
margin:5px;
mid-width: 260px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;



`



const Product = ({item}) => {
  return(
    <Contained>
    <Container>
      
     <Image src={item.img}/>
     <Info>
         <Icon>
             <Link to={`/product/${item._id}`}>
            
             <SearchOutlined/>
             </Link>
         </Icon>
         
     </Info>
     
    
    </Container>
    <Price><b>£{item.price}.00</b></Price>
     <Title><b>{item.title}</b></Title>
    </Contained>

    
    

  );
};

export default Product;
