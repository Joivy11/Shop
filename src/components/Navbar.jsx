import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

const LinkItem = styled(Link)`
    color:black;
    text-decoration:none;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                    </SearchContainer>
                </Left>
                <Center>
                    <LinkItem>
                        JOIVY.
                    </LinkItem>
                </Center>
                <Right>...</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;