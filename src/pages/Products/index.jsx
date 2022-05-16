import React from 'react'
import * as S from './styles'
import mustache from '../../assets/images/heading-ic.png'
import { products } from '../../assets/images/products'

export default function Products() {
  return (
    <S.ProductsContainer id="produtos">
      <div>
      <h2>Nossos Produtos</h2>
        <div className="img-mustache">
            <img className="heading-ic" alt="Nossos Serviços" src={mustache}/>
        </div>
      </div>
      <section>
        {products.map(({title, image}) => (
          <S.ProductCard key={Math.random()}>
            <img src={image} alt='product' />
            <h4>{title}</h4>
          </S.ProductCard>
        ))}
      </section>
    </S.ProductsContainer>
  )
}
