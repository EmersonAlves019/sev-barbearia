import styled from 'styled-components';
import location from '../../assets/images/bg-location.jpg'
import {BsWhatsapp} from 'react-icons/bs'

export const LocationContainer = styled.section`
    width: 100%;
    height: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${location});
`;

export const Container = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    width: 60%;
    min-width: 950px;


.contacts {
    background-color: var(--dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px;
}
 .contacts .info {
    display: flex;
}
 .contacts .info .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--main-color);
    padding: 10px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 100%;
}
 h5 {
    color: rgb(148, 148, 148);
    font-size: 15px;
    font-weight: 400;
}
 h6 {
    font-size: 15px;
    color: white;
    font-weight: 400;
}

`

export const WhatsIcon = styled(BsWhatsapp)`
    color: #917758;
    width: 18px;
    height: 18px;

`