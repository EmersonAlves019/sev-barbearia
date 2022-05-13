import React from 'react'
import AboutSideBar from '../../components/AboutSideBar'
import AboutDescription from '../../components/AboutDescription'
import * as S from './styles'

export default function About() {

  return (
    <S.AboutContainer id="sobre">
        <AboutSideBar/>
        <AboutDescription />
    </S.AboutContainer>
  )
}
