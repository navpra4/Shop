import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

const Container = styled.div`
    height:60px;
    ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const Searchcontainer = styled.div`
    border: 0.8px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`
const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:"2" ,justifyContent:"center"})}
`
const MenuItem = styled.div`
    cursor: pointer;
    font-size: 14px;
    margin-left: 40px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <Searchcontainer>
                    <Input placeholder='Search'></Input>
                    <Search></Search>
                </Searchcontainer>
            </Left>
            <Center>
                <Logo>NARUHINA</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Link to="/cart">
                    <Badge badgeContent={quantity} color='primary'>
                        <ShoppingCartOutlined/>
                    </Badge>
                    </Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar