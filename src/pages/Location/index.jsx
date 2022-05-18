import React from 'react'
import * as S from './styles'
import location from '../../assets/images/map-img1.png'
import time from '../../assets/images/map-img4.png'

export default function Location() {
  return (
    <S.LocationContainer id='localizacao'>
      <S.Container>
        <div className="contacts">
            <div className="info">
                <div className="icon">
                    <img className="loc-icon" alt="Localização" src={location}/>
                </div>
                <div>
                    <h5>Localização</h5>
                    <h6>R. Supervisor Ivaldo Ferino, Nº 330</h6>
                </div>
            </div>
            <div className="info">
                <div className="icon">
                    <S.WhatsIcon/>
                </div>
                <div>
                    <h5>Telefone</h5>
                    <h6>(82) 98810-1424</h6>
                </div>
            </div>
            <div className="info">
                <div className="icon">
                    <img className="loc-icon" alt="Horário" src={time}/>
                </div>
                <div>
                    <h5>Horário</h5>
                    <h6>Seg. à Sab: 07:00 - 19:00</h6>
                </div>
            </div>
        </div>
          <iframe width="100%" height="440" id="gmap_canvas" src="https://maps.google.com/maps?q=-9.5698376,-35.7852764&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </S.Container>
  </S.LocationContainer>
  )
}
