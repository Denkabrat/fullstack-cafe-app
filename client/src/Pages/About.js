import React, { Component } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledAboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledTextContainer = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 56px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const StyledP = styled.p`
  font-size: 27px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 38%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
  margin-bottom: 5px;
  border-radius: 10%;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const Glavn2 = () => {

  const goods = useSelector((state) => state.goods.goods.rows);

  const renderAllGoods = () => {
    if(!goods) return [];

   return(
      goods?.map((good,index) => (
        <StyledImg 
          key={index} 
          className={`macar${index}`}
          src={`${process.env.REACT_APP_PUBLIC_API_URL}`+ good?.img} 
          alt={`Macaron-${index}`} 
        />
      ))
   )
  }

    return (
      <>
        <StyledAboutContainer className="about-container">
          <StyledTextContainer className="text-container">
            <StyledH1 className="title">Атмосфера, согревающая душу</StyledH1>
            <StyledP className="description">
              Macaroni Fantasy - это больше, чем просто место, где можно насладиться вкусным кофе и выпечкой;
              Это атмосфера, которая окутывает теплом и уютом.
              С того момента, как вы войдете внутрь, вас встретит нежный гул разговора, насыщенный аромат свежесваренного кофе
              и мягкое, манящее освещение, которое задает идеальное настроение.
            </StyledP>
          </StyledTextContainer>
          <StyledImageContainer className="image-container1">
            {renderAllGoods()}
          </StyledImageContainer>
        </StyledAboutContainer>
      </>
    );
}

export default Glavn2;