import styled from 'styled-components';
import heading from '../../assets/images/heading-ic-white.png'

export const ScheduleContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-color);
    background-repeat: no-repeat;
    background-position: right bottom;
    height: 95vh;

 h2 {
    color: var(--light);
    &:after {
      content: '';
      display: block;
      margin: 15px auto;
      background-image: url(${heading});
      background-repeat: no-repeat;
      height: 30px;
      width: 150px;
  }
}

form {
    margin-top: 60px;
    width: 60%;
}

section {
  display: flex;
      div {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
    }
     margin-bottom: 60px;
}

.form-header {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
    }
    margin-bottom: 60px;
}

label {
    color: var(--light);
}

 input, select {
    height: 40px;
    width: 250px;
    font-size: 15px;
    color: var(--main-darker);
    letter-spacing: -1px;
    padding: 10px;
    border: none;
    border-radius: 3px;

}
 textarea {
    width: 100%;
    border-radius: 3px;
    border: none;
}
button {
    display:block;
    color: var(--light);
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px 40px;
    background-color: var(--main-darker);
}
`;


/* display: flex;
flex-direction: column;
align-items: center;
position: relative;

height: 50vw;
background-color: var(--main-color);

h2  {
  color: var(--light);
  &:after {
    content: '';
    display: block;
    margin: 15px auto;
    background-image: url(${heading});
    background-repeat: no-repeat;
    height: 30px;
    width: 150px;
  }
} */
// export const ScheduleCardsContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 10px;
//   padding-top: 20px;

//   width: 50%;
//   height: 80%;
//   background: #fff;
// `;

// export const Content = styled.section`
//   display: flex;
//   justify-content: space-evenly;
//   width: 70%;
//   height: 80%;
// `;

// export const ImageBackground = styled.img`
//   position:absolute;
//   left: 10px;
//   bottom: 0;
//   transform: scaleX(-1);
// `
