import React, { Component } from 'react';
import styled from 'styled-components';
import forestImg from '../img/glav.jpg';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;

  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  margin-top: 13%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const WelcomeText = styled.div`
  color: black;
  font-size: 27px;
  word-wrap: break-word;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Title = styled.div`
  color: black;
  font-size: 64px;
  font-family: 'Playfair Display', serif;
  word-wrap: break-word;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    font-size: 40px; 
  }
`;

const StyledButton = styled(Button)`
  color: white;
  font-size: 33px;
  width: 15%; 
  font-family: 'Playfair Display', serif;
  background-color: #D17E98;

  &:hover {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    width: 50%; 
  }
`;


const Image = styled.img`
  width: 45%;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Fox = () => {
  
    return (
      <Container>
        <TextContainer>
          <WelcomeText>Добро пожаловать в Macaroni Fantasy - Кафе</WelcomeText>
          <Title>Где встречаются кофе и дружба</Title>
          <Link to="/menu">
            <StyledButton variant="white">Меню</StyledButton>
          </Link>
        </TextContainer>
        <Image src={forestImg} alt="Forest" />
      </Container>
    );
}

export default  Fox;

