import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

const Container = styled.div`
    height:60px;
    @media only screen and (max-width: 380px){
        height: 50px;
    }
`;

const Wrapper = styled.div`
    height:100%;
    width:100%;
    padding:5px 20px;
    box-sizing:border-box;  
    display:flex;
    align-content:center;
    justify-content:space-between;
    @media only screen and (max-width: 380px){
        padding: 10px 0px;
    }
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor:pointer ;
    @media only screen and (max-width: 380px){
        display: none;
    }
`;

const SearchContainer = styled.div`
    display:flex;
    align-items:center;
    border:0.5px solid lightgray;
    margin-left:25px;
    padding:5px;
`;

const Input = styled.input`
    border:none;
    outline:none;
    @media only screen and (max-width: 380px){
        width: 50px;
    }
`;

const Center = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    font-weight:bold;
`;

const Logo = styled.h2`
    font-weight:bold;
    @media only screen and (max-width: 380px){
        font-size: 24px;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media only screen and (max-width: 380px){
        flex: 2;
        justify-content: center;
    }
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    @media only screen and (max-width: 380px){
        font-size: 12px;
        margin-left: 10px;
    }
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:"gray", fontSize:"16px"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>JOIVY.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={99} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;