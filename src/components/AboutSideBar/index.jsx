import React from 'react'
import * as S from './styles'
import classicCut from '../../assets/images/classic-cut.png'
import imagesloc from '../../assets/images/loc-ic.png'

export default function AboutSideBar() {
  return (
    <S.AboutSideBarContainer>
      <section>
        <img src={classicCut} alt="Horários" />
        <h3>Horários</h3>
          <div>
              <h4>Segunda-feira à Sábado</h4>
              <p>07:00 - 19:00</p>
          </div>
          <div>
                <h4>Domingo</h4>
                <p>Fechado</p>
          </div>
          <div>
              <img alt="Localização" src={imagesloc}/>
              <p>R. Supervisor Ivaldo Ferino, Nº 330</p>
          </div>
     
              <S.WhatsIcon/>
              <p>(82) 98810-1424</p>
       
      </section>
    </S.AboutSideBarContainer>
  )
}
