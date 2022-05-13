import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 140px;
  color: #fff;
  background-color: rgba(0,0,0, 25%) ;
  
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
`