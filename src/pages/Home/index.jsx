import React from 'react'
import About from '../../components/About'
import Header from '../../components/Header'
import * as S from './styles'

export default function Home() {
  return (
    <S.HomeContainer>
      <S.BgBanner/>
      <Header />
      <About /> 
    </S.HomeContainer>
  )
}
