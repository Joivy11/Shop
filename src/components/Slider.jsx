import React, { useState } from 'react';
import ArrowLeftOutlined from '@mui/icons-material/ArrowRightOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.0s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height:80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h3`
    font-size: 70px;
`;

const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 50px 0;
`;

const Button = styled.button`
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}

                {/* <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213949_960_720.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide>
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213949_960_720.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide> */}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider;