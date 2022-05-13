import React from 'react'
import * as S from './styles'
import classicCut from '../../assets/images/classic-cut.png'
import imagesphone from '../../assets/images/phone-ic.png'
import imagesloc from '../../assets/images/loc-ic.png'

export default function AboutSideBar() {
  return (
    <S.AboutSideBarContainer>
      <section>
        <img src={classicCut} alt="Horários" />
        <h3>Horários</h3>
          <div>
              <h4>Segunda-feira à Sexta-feira</h4>
              <p>09:00AM - 05:00PM</p>
          </div>
          <div>
              <h4>Sábado</h4>
              <p>09:00AM - 02:00PM</p>
          </div>
          <div>
                <h4>Domingo</h4>
                <p>Fechado</p>
          </div>
          <span>
              <img alt="Localização" src={imagesloc}/>
              <p>Rua da Matrix, 33</p>
              <img alt="Telefone" src={imagesphone}/>
              <p>(11) 9999-9999</p>
          </span>
      </section>
    </S.AboutSideBarContainer>
  )
}
