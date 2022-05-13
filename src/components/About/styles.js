import styled from 'styled-components'
import bgHome from '../../assets/images/bg-home.jpg'

export const AboutContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  background-color: none;
  margin-top: 70vh;
`

export const BgBanner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgHome}) ;
  position: fixed;
  z-index: -1;
`