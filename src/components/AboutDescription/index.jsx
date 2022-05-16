import React from 'react'
import * as S from './styles'
import shaveBrush from '../../assets/images/shave-brush.jpg'

export default function AboutDescription() {
  return (
    <S.AboutDescriptionContainer>
      <span>Uma história única</span>
      <h2>9 anos de experiência</h2>
      <div>
          <div>
            <p>Fundado em 2013, pelos paulistanos Vagner e Shirley da Silva que estabeleceram-se nas terras alagoanas no bairro do Clima Bom, Maceió.
              De família raizada no ramo da barbearia, apostam no serviço de qualidade para público masculino adulto e infanti, além de conforto com espaço climatizado, mesa de sinuca, hop bros e wi-fi grátis.
              Especializados em cortes adultos e infantis, luzes, platinado, alisamento, limpeza de pele e barba terapia com toalha quente e esfoliação da pele.
            </p>
          </div>
      <img alt="Imagem do Artigo" src={shaveBrush} />
      </div>
    </S.AboutDescriptionContainer>
  )
}
