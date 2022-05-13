import styled from 'styled-components'
import bgHome from '../../assets/images/bg-home.jpg'

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: none;

`

export const BgBanner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgHome});
  background-size: cover ;
  position: fixed;
  z-index: -1;
`