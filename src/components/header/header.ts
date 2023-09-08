  import styled, { css, keyframes } from 'styled-components';

  interface openModal {
    visible: boolean
  }

  interface header {
    transparent: boolean
  }

  const fillAnimation = keyframes`
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  `;

  const fillBarAnimation = css`
    animation: ${fillAnimation} 0.5s ease-out forwards;
  `;


  export const Container = styled.div`
    width: 100%;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  `
  export const topbar = styled.div`
    display: none;

  `
  export const header = styled.header<header>`
    width: 100%;
    height: 100%;
    padding-inline: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 10px;
    transition: .4s ease-in;
    
    backdrop-filter: ${({ transparent }) => (transparent ? 'none' : 'blur(8px)')};
    background: ${({ transparent }) => (transparent ? 'transparent' : 'rgba(0, 0, 0, 0.05)')};

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ transparent }) => (transparent ? 'transparent' : 'var(--color-base)')};
      transform-origin: left;
      ${({ transparent }) => (!transparent && fillBarAnimation)};
    }

    
  `

  export const Logo = styled.a`
  display: flex;
      align-items: center;
      gap: 5px;
      
      img{
        width: 50px;
        height: 50px;
      }
      h1{
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        line-height: 25px;
        
      }
  `

  export const btn_open = styled.button`
    display: grid;
    place-items: center;
    font-size: 35px;

    @media (min-width: 992px) {
      display: none;
    }
  `

  export const navbar = styled.nav<openModal>`
    width: 300px;
    height: 100vh;
    padding-inline: 15px;
    overflow: scroll;
    background-color: #333;

    position: fixed;
    top: 0;
    left: ${({ visible }) => (visible ? '0' : '-300px')}; /* Posição inicial fora da tela */
    z-index: 4;
    opacity: ${({ visible }) => (visible ? '1' : '0')}; /* Adicionando o efeito de fade-in */

    transform: none;

    transition: left 1.2s , opacity 1.2s ; /* Adicionando a transição de opacidade */
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
      all: unset;
    }

  `
  export const logo_navbar = styled.a`
      width: 100%;
      color: #fff;
      padding-inline: 15px;
      padding-block: 35px 15px;
      position: relative;

      display: flex;
      align-items: center;
      gap: 5px;
      
      img{
        width: 50px;
        height: 50px;
      }
      h1{
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        line-height: 25px;
        
      }
      
    .btn_close{
    width: 30px;
    height: 30px;
    color: #fff;
    border: 1px solid currentColor;
    padding: 4px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 0 ;
    }

    @media (min-width: 992px) {
      display: none;
    }


  `
  export const nav_list = styled.ul`
    display: grid;
    gap: 10px;

    @media (min-width: 992px) {
      display: flex;
    }
  `
  export const nav_link = styled.li`
    padding: 10px;
    border-top: 1px solid var(--color-hover);
    border-bottom: 1px solid var(--color-hover);

    a{
      font-size: 18px;
      font-weight: bold;
      color: var(--color-hover);
      transition: .2s ease;

      &:hover{
        color:var(--color-base);
      }
    }

    @media (min-width: 992px) {
      border: none;
      a{
        color: var(--color-text);
      }
    }

  `
  export const invitation = styled.div`
    margin-top: 35px;
    text-align: center;
    color: var(--color-hover);
    p:nth-child(1){
      color: #fff;
      font-size: 22px;
      
    }
    
    @media (min-width: 992px) {
      display: none;
    }
  `