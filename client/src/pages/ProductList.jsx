import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components"
import Annoncement from '../Component/Annoncement';
import Navabar from '../Component/Navabar';
import Newsletter from '../Component/Newsletter';
import Products from '../Component/Products';


const Container = styled.div`
background-color:#282728;
color:white;
`
const Title = styled.h1`margin: 20px;`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;


`

const Select = styled.select`
padding:10px;
margin-right:20px;
`
const Option = styled.option``
const Filter = styled.div` margin: 20px;`
const FilterText = styled.span`
font-size: 20px;
font-weight:600;

`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");
  return (

    <Container>
      <Navabar/>
      <Annoncement/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
           <FilterText>Sort Products:</FilterText>
           <Select onChange={(e) => setSort(e.target.value)}>
             <Option selected disabled>Sort by</Option>
            <Option value="asc">Price Ascending</Option>
            <Option value="desc">Price Decsending</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
    </Container>
  );
};

export default ProductList;
