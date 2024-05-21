import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Phone from '../img/phone.png';
import Email from '../img/email.png';
import Time from '../img/time.png';
import VK from '../img/vk.png';
import teleg from '../img/telegram.png';
import Pinterest from '../img/pinterest.png';
import '../App.css';

const FooterContainer = styled.footer`
  width: 100%;
  background: #E17396;
  color: white;
  padding: 30px 20px; // Добавьте отступы для лучшего вида
  box-sizing: border-box; // Убедитесь, что отступы не увеличивают размер 

  @media (max-width: 768px) { 
    text-align: center; // Центрируем текст на маленьких экранах
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column; // Вертикальное расположение на маленьких экранах
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1; 
  margin: 0 10px; // Добавьте небольшой отступ между колонками

  @media (max-width: 768px) {
    margin-bottom: 10px; // Добавьте отступ снизу для каждой колонки на маленьких экранах
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-family: 'Playfair Display', serif;
  margin-bottom: 10px;
`;

const Info = styled.div`
  font-size: 24px;
  font-family: 'Playfair Display', serif;
`;

const Brand = styled.div`
  font-size: 41px;
  font-family: 'Beau Rivage', serif;
  text-align: center;
  margin-bottom: 10px;
`;

const Slogan = styled.div`
  font-size: 15px;
  font-family: 'Alice', serif;
  text-align: center;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterButton = styled(Button)`
  color: black;
  font-size: 20px; 
  width: 100%; 
  font-family: 'Playfair Display', serif;
  border-radius: 15px;
  background-color: ${({ variant }) => variant === 'white' ? 'rgba(255, 255, 255, 0.52)' : 'white'};
  margin-bottom: 10px;

  &:hover {
    background-color: #E17396 !important;
    border-color: #E17396 !important; 
    color: ${({ variant }) => variant === 'white' ? 'white' : 'black'} !important; // Меняем цвет текста
  }
`;



const Footer = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterColumn>
          <Title>
            <Icon src={Phone} alt="Phone" />
            Телефон
          </Title>
          <Info>+7(904)768-77-77</Info>
        </FooterColumn>

        <FooterColumn>
          <Title>
            <Icon src={Email} alt="Email" />
            E-mall
          </Title>
          <Info>cafe@gmail.com</Info>
        </FooterColumn>

        <FooterColumn>
          <Title>
            <Icon src={Time} alt="Time" />
            Время работы
          </Title>
          <Info>Пн-Вс 8:00-20:00</Info>
        </FooterColumn>
      </FooterRow>

      <Brand>Macaroni Fantasy</Brand>
      <Slogan>Кафе и кондитерская</Slogan>

      <SocialIcons>
        <Icon src={VK} alt="Vk" />
        <Icon src={teleg} alt="Teleg" />
        <Icon src={Pinterest} alt="pinterest" />
      </SocialIcons>

      <FooterRow>
        <FooterColumn>
          <Link to="/menu">
          <FooterButton variant="white">Выполнить заказ</FooterButton>
          </Link>
        </FooterColumn>
        <FooterColumn>
          <Link to="/table">
            <FooterButton variant="danger">Бронировать столик</FooterButton>
          </Link>
        </FooterColumn>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;