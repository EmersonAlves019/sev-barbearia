import React from 'react';
import mustache from '../../assets/images/much-img.png';
import * as S from './styles';

export default function Banner() {
  return (
    <S.BannerContainer>
      <h4>Profissionalismo e excelência</h4>
      <h1>S & V Barber Shop</h1>
      <h3>O melhor lugar para cuidar do seu estilo</h3>
      <img alt="Bigode" src={ mustache } />
    </S.BannerContainer>
  );
}
