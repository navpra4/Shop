import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Fitler = styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}
`
const FitlerText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}
`
const Option = styled.option`
    
`
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFitlers] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilter = (e)=>{
    const value = e.target.value;
    setFitlers({
        ...filters,
        [e.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Fitler>
                <FitlerText>Filter Products:</FitlerText>
                <Select name="color" onChange={handleFilter}>
                    <Option disabled>
                        Color
                    </Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>blue</Option>
                    <Option>red</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                    <Option>grey</Option>
                </Select>
                <Select name="size" onChange={handleFilter}>
                    <Option disabled >
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Fitler>
            <Fitler>
                <FitlerText>
                    Sort Products:
                </FitlerText>
                <Select onChange={(e)=>{setSort(e.target.value)}}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Fitler>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList