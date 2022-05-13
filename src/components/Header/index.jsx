import React from 'react'
import * as S from './styles'

export default function Header() {
  return (
    <S.HeaderContainer>
      <ul>
          <li>
              <a href="#home">Home</a>
          </li>
          <li>
              <a href="#sobre">Sobre</a>
          </li>
          <li>
              <a href="#servicos">Serviços</a>
          </li>
          <li>
            Logo
          </li>
          <li>
              <a href="#galeria">Galeria</a>
          </li>
          <li>
              <a href="#agendamento">Agendamento</a>
          </li>
          <li>
              <a href="#localizacao">Localização</a>
          </li>
       </ul>
    </S.HeaderContainer>
  )
}
