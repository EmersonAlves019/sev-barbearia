
import styled from 'styled-components';

export const GalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--light);
    padding-bottom: 150px;
    height: 950px;

    h2 {
      margin-top: 60px;
      color: var(--main-darker);
    }

    img {
      display: block;
      margin: 0 auto;
    }
    .img-mustache {
      text-align: center;
      margin-top: 20px;
    }

    section {
      margin-top: 60px;
      flex-wrap: wrap;
      width: 1050px;

      div {
        display: inline-block;
        width: 25%;
        height: 300px;
        min-height: 320px;
        overflow: hidden;
        margin: 5px;
        border: 10px solid var(--main-color);

        img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        }

      }
      div[id='foto5']{
        width: 60% ;
      }
  }
`;