import React from 'react'
import * as  S from './styles'

export default function ScheduleCard({service}) {
  return (
    <S.ScheduleCardContainer>
      <img src={service.image} alt='service.name' />
      <div>
        <h3>{service.name}</h3>
        <p>service.avaliable</p>
      </div>
    </S.ScheduleCardContainer>
  )
}

