import styled from "styled-components";

export const BannerContainer = styled.header`
  color: var(--color-secondary);
  text-align: center;
  position: absolute;
  max-width: 760px;
  max-height: 260px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 110px;
    width: 1200px;
    font-weight: bold;
  }

  h4 {
    display:block;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: var(--main-color);
    font-size: 20px;
  }

  h3 {
    display:block;
  }

  img {
    margin-top: 10px;
  }
`;
