import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    flex: 1;
    height: 70vh;
    margin: 3px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media only screen and (max-width: 380px){
        height: 20vh;
    }
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategotyItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategotyItem;

