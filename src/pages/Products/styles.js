import styled from 'styled-components'

export const ProductsContainer = styled.section`
  background-color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  flex-direction: column;
  
  section {
    overflow: auto;
    display: flex;
    align-items: center;
    flex-wrap:  wrap;
    width: 70%;
    height: 70%;

  }

    h2 {
      color: var(--main-darker);
    }

    img {
      display: block;
      margin: 0 auto;
    }
    .img-mustache {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 60px;
    }

`
export const ProductCard = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 300px;
  box-shadow: 0 0 10px 0 #a9a9a9;
  background: #ddd1c1;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    transition:all 0.2s ;
  }

  img {
    width: 60%;
  }

  h4{
    padding: 18px;
  }

  button {
    width: 95%;
    background: var(--main-color);
    font-size: 20px;
    color: var(--light);
    border:none;
    border-radius: 5px ;
  }
`
