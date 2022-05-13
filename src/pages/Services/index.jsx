import React from 'react';
import * as S from './styles'
import heading from '../../assets/images/heading-ic.png'
import classic from '../../assets/images/classic-cut.png'
import clipper from '../../assets/images/clipper-cut.png'
import razoe from '../../assets/images/razoe-shaver.png'

export default function Services() {
  return (
    <S.ServicesContainer id="servicos">
        <h2>Nossos serviços</h2>

        <div>
            <img alt="Nossos Serviços" src={heading}/>
        </div>

        <section >
            <div>
                <img alt="Corte" src={classic}/>
                <h4>Lorem Ipsum</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, error? Laborum non porro corporis voluptatibus adipisci eligendi exercitationem magni perspiciatis architecto veniam, reiciendis doloremque? A enim voluptas tempora ratione hic?</span>
            </div>
            <div>
                <img alt="Barba" src={clipper}/>
                <h4>Lorem Ipsum</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, error? Laborum non porro corporis voluptatibus adipisci eligendi exercitationem magni perspiciatis architecto veniam, reiciendis doloremque? A enim voluptas tempora ratione hic?</span>
            </div>
            <div>
                <img alt="Maquina" src={razoe}/>
                <h4>Lorem Ipsum</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, error? Laborum non porro corporis voluptatibus adipisci eligendi exercitationem magni perspiciatis architecto veniam, reiciendis doloremque? A enim voluptas tempora ratione hic?</span>
            </div>
        </section>
    </S.ServicesContainer>
  );
}
