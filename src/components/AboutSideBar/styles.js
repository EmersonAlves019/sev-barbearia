import styled from 'styled-components'
import brush from '../../assets/images/brush-big.jpg'

export const AboutSideBarContainer = styled.aside`
    position: relative;
    width: 350px;
    top: -40px;
    height: 800px;
    padding: 20px;
    background-size: cover;
    background-image: url(${brush});

    & section {
      text-align: center;
      padding: 40px 20px;
      background-color: rgb(0, 0, 0, 0.8);
      height: 760px;

      div {
        font-size: 16px;
        h4 {
          color: gray;
          font-weight: 400;
          margin-top: 20px;
        }

        &:after {
          content: '•';
          display: block;
          margin-top: 20px;
          color: white;
          font-size: 28px;
        }
      }

      p {
        color: white;
        display: block;
      }

      img {
        height: 30px;
        margin-top: 20px;
      }

      img[alt='Horários'] {
        height: 50px;
        margin:0;
      }

      h3 {
        font-size: 35px;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--main-color);
        width: fit-content;
        margin: 0 auto;
        border-bottom: 1px solid var(--main-color);
      }
    }
`