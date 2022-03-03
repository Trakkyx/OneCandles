import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import Product from "./Product";
import axios from "axios"

const Container = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-between;
background-color:#282728;
padding:20px;
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
     .map((item) => <Product item={item} key={item.id} />)}
</Container>
  )
  
};

export default Products;

