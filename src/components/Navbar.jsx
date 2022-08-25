import React from 'react';
import styled from 'styled-components';

import Search from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

const Container = styled.div`
    width:100%;
    height:60px;
    box-sizing:border-box;
`;

const Wrapper = styled.div`
    height:100%;
    width:100%;
    padding:5px 20px;
    box-sizing:border-box;  
    display:flex;
    align-content:center;
    justify-content:space-between;
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor:pointer ;
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
`;

const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

const MenuItem = styled.div`
    margin-left:10px;
    display:flex;
    align-items: center;
    padding:8px;
    border-radius:40px;
    transition:.2s all;
    &:hover{
        background-color: #eee;
    }
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
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