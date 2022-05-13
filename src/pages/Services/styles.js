import styled from 'styled-components';

export const ServicesContainer = styled.section`
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 900px;

  h2 {
    color: var(--main-darker);
  }

  section {
    display: flex;
    text-align: center;
    margin-top: 60px;
    height: 600px;

    h4 {
     color: var(--main-darker);
     padding: 30px 0;
     font-size: 17px;

    &:after {
      content: '';
      display: block;
      height: 9px;
      width: 35px;
      margin: 0 auto;
      margin-top: 10px;
      align-content: center;
      background-image: url('/img/head-line-ic.png');
      background-repeat: no-repeat;
    }
    }

    div {
    border: 3px solid var(--main-color);
    line-height: 30px;
    padding: 50px 35px;
    margin: 0 30px 10px 30px;
    color: var(--main-darker);
    width: 320px;

    }
  }
`;

