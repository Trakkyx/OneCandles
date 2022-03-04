import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import Product from "./Product";
import axios from "axios"
import { publicRequest } from '../requestMethods';

const Container = styled.div`
display: grid;
background-color:#282728;
padding:20px;
grid-auto-columns: max-content;
grid-auto-flow: dense;
grid-auto-rows: minmax(100px, auto);
grid-gap: 25px;
grid-template-columns: repeat(4, 1fr);
@media only screen and (max-width:1000px){

  grid-template-columns: repeat(3, 1fr);
}
@media only screen and (max-width:900px){

  grid-template-columns: repeat(2, 1fr);
}


@media only screen and (max-width:800px){

  grid-template-columns: repeat(1, 1fr);
}


`

const Products = ({cat,filters,sort}) => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async() =>{
          try{
            const res = await publicRequest.get(cat ? `/api/product?category=${cat}` 
            : "/api/product"
            );
            setProducts(res.data);
          }catch(err){}
          };
          getProducts();
    },[cat]);
     useEffect(()=>{
      if(sort==="asc"){
            setProducts((prev)=>
            [...prev].sort((a,b)=>a.price - b.price)
            );
      }else{
              setProducts((prev)=>
              [...prev].sort((a,b)=>b.price - a.price)
              );
      } },[sort])
  return (

<Container>
 {products
 .slice(0.8)
     .map((item) => <Product item={item} key={item.id} />)}
</Container>
  )
  
};

export default Products;

