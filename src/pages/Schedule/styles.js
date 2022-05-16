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
  display:flex;
  flex-wrap: wrap;
  margin-top: 60px;
  width: 60%;
  min-width: 850px;
}

.form-header {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;

    div {
      display: flex;
      flex-direction: column;
      margin: 20px 30px 0 0;
    }
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
    margin-right: 30px;
    border-radius: 3px;
    border: none;
    min-width: 100%;
    min-height: 100px;
    max-height: 200px;
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
