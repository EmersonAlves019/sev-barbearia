import styled from 'styled-components'

export const AboutDescriptionContainer = styled.article`
    color: var(--color-secondary);
    margin-top: 100px;
    margin-left: 80px;
    width: 800px;

    h2 {
      &:after {
        content:'';
        display: block;
        width: 80px;
        margin: 30px 0;
        height: 3px;
        background-color: rgb(163, 145, 111);
      }
    }

    p {
      font-size: 20px;
      margin-bottom: 20px;
    }

    div {
       display: flex;
       div {
         flex-direction: column ;
       }
    }
`