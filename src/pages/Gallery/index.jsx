import React from 'react'
import * as S from './styles'
import mustache from '../../assets/images/heading-ic.png'
import image1 from '../../assets/images/gallery-img1.jpeg'
import image2 from '../../assets/images/gallery-img2.jpeg'
import image3 from '../../assets/images/gallery-img3.jpg'
import image4 from '../../assets/images/gallery-img4.jpeg'
import image5 from '../../assets/images/gallery-img5.jpeg'

export default function Gallery() {
  return (
      <S.GalleryContainer id="galeria">
            <h2>Galeria de Fotos</h2>
            <div className="img-mustache">
                <img className="heading-ic" alt="Nossos Serviços" src={mustache}/>
            </div>
            <section className="photo-gallery">
                <div id='foto5'>
                    <img alt="foto5" src={image5}/>
                </div>
                <div>
                    <img alt="Galeria de fotos" src={image3}/>
                </div>
                <div>
                    <img alt="Galeria de fotos" src={image4}/>
                </div>
                <div>
                    <img alt="Galeria de fotos" src={image2}/>
                </div>
                <div>
                    <img alt="Galeria de fotos" src={image1}/>
                </div>
            </section>
    </S.GalleryContainer>

  )
}
