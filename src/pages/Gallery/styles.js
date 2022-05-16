
import styled from 'styled-components';

export const GalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--light);
    padding-bottom: 150px;
    height: 60vw;

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
      margin: 60px 0;
      height: 120vh;
      flex-wrap: wrap;
      width: 1050px;

      div {
        display: inline-block;
        width: 25%;
        height: 360px;
        min-height: 380px;
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
        width: 65% ;
      }
  }
`;