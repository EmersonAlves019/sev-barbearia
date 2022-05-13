import styled, {css} from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 140px;
  color: #fff;
  background-color: rgba(0,0,0, 25%) ;
  transition: all 0.3s;

  ${({isShrunk}) => isShrunk && css`
    position: fixed;
    height: 60px;
    background-color: black;
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
    
  ${({isShrunk}) => isShrunk && css`
      order: -5;
      width: 60px;
  `}
  }
`