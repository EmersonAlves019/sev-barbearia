import React from 'react'
import * as S from './styles'
import shaveBrush from '../../assets/images/shave-brush.jpg'

export default function AboutDescription() {
  return (
    <S.AboutDescriptionContainer>
      <span>Uma história única</span>
      <h2>52 anos de experiência</h2>
      <div>
          <div>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sint alias voluptatem earum quidem aut cum quibusdam autem totam. Harum cupiditate quo, incidunt eos numquam dolorum ad aspernatur alias distinctio?
              </p>

              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sint alias voluptatem earum quidem aut cum quibusdam autem totam. Harum cupiditate quo, incidunt eos numquam dolorum ad aspernatur alias distinctio?
              </p>
          </div>
      <img alt="Imagem do Artigo" src={shaveBrush} />
      </div>
    </S.AboutDescriptionContainer>
  )
}
