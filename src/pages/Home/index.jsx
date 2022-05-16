import React from 'react'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../pages/About'
import Schedule from '../../pages/Schedule'
import Gallery from '../../pages/Gallery'
import Location from '../../pages/Location'
import Footer from '../../components/Footer';
import * as S from './styles'
import Products from '../Products';


export default function Home() {
  return (
    <>
      <S.HomeContainer id='home'>
        <S.BgBanner/>
        <Header />
        <Banner />
      </S.HomeContainer>
      <About />
      <Products/>
      <Schedule />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
