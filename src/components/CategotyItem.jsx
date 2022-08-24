import React from 'react';
import styled from 'styled-components';
import Link from 'react-router-dom';


const Container = styled.div`
    position: relative;
    flex:1;
    height:70vh;
    margin:3px;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

const Info = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left: 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Title = styled.h1`
    color:white;
    font-size:25px;
    letter-spacing:3px;
    margin-bottom:20px;
`;

const Button = styled.button`
    padding:10px 15px;
    border:none;
    cursor:pointer;
`;

const CategotyItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.Title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategotyItem

