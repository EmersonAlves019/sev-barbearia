import React from 'react';
import ScheduleCard from '../../components/ScheduleCard'
import * as S from './styles'
 
export default function Schedule() {

  const services = [
    {
      image: 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/742.jpg',
      name: 'Degrade',
      id: 1,
      avaliable: 'disponivel'
    },
    {
      image: 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/742.jpg',
      name: 'aaaaaaaa',
      id: 2,
      avaliable: 'disponivel'
    },
        {
      image: 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/742.jpg',
      name: 'Degrade',
      id: 1,
      avaliable: 'disponivel'
    },
        {
      image: 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/742.jpg',
      name: 'Degrade',
      id: 1,
      avaliable: 'disponivel'
    },
        {
      image: 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/742.jpg',
      name: 'Degrade',
      id: 1,
      avaliable: 'disponivel'
    },

  ]

  return (
    <S.ScheduleContainer id='agendamento'>
      <S.ScheduleCardsContainer>
        {services.map((service) => (<ScheduleCard service={service} key={service.id}/>))}
      </S.ScheduleCardsContainer>

      <S.LocationInfos>
                <div className="info">
                    <div className="icon">
                        <img className="loc-icon" alt="Localização" src="/img/map-img1.png"/>
                    </div>
                    <div>
                        <h5>Localização</h5>
                        <h6>Rua da Matrix, 33</h6>
                    </div>
                </div>

                <div className="info">
                    <div className="icon">
                        <img className="loc-icon" alt="Telefone" src="/img/map-img2.png"/>
                    </div>
                    <div>
                        <h5>Telefone</h5>
                        <h6>(11) 9999-9999</h6>
                    </div>
                </div>

                <div className="info">
                    <div className="icon">
                        <img className="loc-icon" alt="E-mail" src="/img/map-img3.png"/>
                    </div>
                    <div>
                        <h5>E-mail</h5>
                        <h6>contato@barbershop.com</h6>
                    </div>
                </div>

                <div className="info">
                    <div className="icon">
                        <img className="loc-icon" alt="Horário" src="/img/map-img4.png"/>
                    </div>
                    <div>
                        <h5>Horário</h5>
                        <h6>Seg. à Sex: 9AM às 5PM</h6>
                    </div>
                </div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.9368444130773!2d-47.59983588491846!3d-15.487828919615817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a702b8a1dcc65%3A0xfc4597825deba006!2sAv.%20Paulista%20-%20Parque%20da%20Gavea%2C%20Planaltina%20-%20GO!5e0!3m2!1sen!2sbr!4v1635408900648!5m2!1sen!2sbr" width="400px" height="50%" loading="lazy"></iframe>
      </S.LocationInfos>
    </S.ScheduleContainer>
  );
}
