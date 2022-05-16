import styled, {css} from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  color: #fff;
  background-color: rgba(0,0,0, 25%) ;
  transition: all 0.3s;

  img {
    height: 80%;
    width: 100px;
  }

  ${({isShrunk}) => isShrunk && css`
    position: fixed;
    height: 60px;
    background-color: rgba(0,0,0, 95%);
    z-index: 5;
  `}
  
  ul {
    list-style: none;
    display:flex;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
    }
  }

  a {
    transition: all 0.2s;
    font-size: 13px;
    padding: 20px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    
    &:hover {
      border-bottom: 1px solid #FFF;
      transform: translateY(-5px) ;
    }
  }

  img {
    height: 80%;
    align-self: center;
    
  ${({ isShrunk }) => isShrunk && css`
      order: -5;
      width: 40px;
  `}
  }
`