import React from 'react';
import styled from 'styled-components';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Telegram from '@mui/icons-material/Telegram';
import Mail from '@mui/icons-material/Mail';
import RoomOutlined from '@mui/icons-material/RoomOutlined';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import MailOutlined from '@mui/icons-material/MailOutlined';


const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 10px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin-bottom: 0px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>JOIVY.</Logo>
                <Desc>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate 
                    reprehenderit magni, suscipit culpa porro quos odit soluta praesentium 
                    voluptate quas aliquid. Quia odio expedita, illo facilis aspernatur 
                    consectetur nobis veritatis laboriosam cumque, quae voluptate ea. 
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="29aaec">
                        <Telegram />
                    </SocialIcon>
                    <SocialIcon color="ee473f">
                        <Mail />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>My Account</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem style={{marginRight:"10px"}}>
                    <RoomOutlined style={{marginRight:"10px"}}/> 123 Ly Thuong Kiet, Ward 7, District 11, Ho Chi Minh City
                </ContactItem>
                <ContactItem style={{marginRight:"10px"}}>
                    <PhoneOutlined style={{marginRight:"10px"}}/> +84 979 79* ***
                </ContactItem>
                <ContactItem style={{marginRight:"50px"}}>
                    <MailOutlined style={{marginRight:"10px"}}/> joivy@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;