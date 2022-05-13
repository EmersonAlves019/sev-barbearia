import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-scroll'
import Logo from '../../assets/images/logo.png'

export default function Header() {
  const navigate = useNavigate();
  const { path } = useParams();
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    console.log(path);
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const options = {
    duration: 500,
    smooth: 'true'
  }

  return (
    <S.HeaderContainer isShrunk={isShrunk}>
      <ul>
          <li>
              <Link to="home" onClick={() => navigate('/')} {...options} offset={-50}>Home</Link>
          </li>
          <li>
              <Link to="sobre" onClick={() => navigate('/sobre')} {...options} offset={-100}>Sobre</Link>
          </li>
          <li>
              <Link to="servicos" onClick={() => navigate('/servicos')} {...options} offset={-50}>Serviços</Link>
          </li>
            <img src={Logo} alt='logo' />
          <li>
              <Link to="agendamento" onClick={() => navigate('/agendamento')} {...options} offset={-60}>Agendamento</Link>
          </li>
          <li>
              <Link to="galeria" onClick={() => navigate('/galeria')} spy={true} {...options} offset={-50}>Galeria</Link>
          </li>
          <li>
              <Link to="localizacao"  onClick={() => navigate('/localizacao')} spy={true} {...options} offset={-50}>Localização</Link>
          </li>
       </ul>
    </S.HeaderContainer>
  )
}
