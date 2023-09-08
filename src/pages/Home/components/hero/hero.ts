import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 85px;

  display: grid;
  gap: 15px;
  
  @media (min-width: 768px) {
    align-items: center;
    gap: 50px;
    padding-top: 100px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
  }
`

export const container_text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1200px) {
    gap: 15px;
  }
`
export const title_hero = styled.h3`
  font-size: 4rem;
  font-weight: bold;
  line-height: 55px;
  color: var(--color-title);
  
  span{
    color: var(--color-base);
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
  }
`
export const description = styled.p`
  font-size: 15px;
  color: var(--color-text);
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`
export const btns = styled.div`
  width: 100%;
  height: 100%;  
`

export const container_img = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 20px;
  
  padding: 20px 10px;
  border-radius: 20px;

  backdrop-filter: blur(10px); 
  background: linear-gradient(to bottom, rgba(255, 108, 100, .8), transparent);
  @media (min-width: 768px) {
    padding-block: 30px 20px;
  }
    @media (min-width: 1200px) {
    /* width: fit-content;
    height: fit-content; */
    width: 100%;
    padding-left: 30px ;
    }
`
export const card = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;  
  backdrop-filter: blur(10px); 
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;

  @media (min-width: 768px) {
    padding-top: 30px;
  }
  @media (min-width: 1200px) {
    width: 200px;
    height: 180px;
  }
`
export const Figure = styled.figure`
  width: 80px; /* Ajuste o tamanho da imagem de acordo com suas necessidades */
  height: 80px; /* Ajuste o tamanho da imagem de acordo com suas necessidades */
  clip-path: circle();
  position: absolute;
  top: -15%; /* Ajuste a posição vertical da imagem */
  left: 50%;
  transform: translateX(-50%); /* Centraliza horizontalmente */

  @media (min-width: 768px) {
    width: 120px; /* Ajuste o tamanho da imagem para telas maiores */
    height: 120px; /* Ajuste o tamanho da imagem para telas maiores */
    top: -20%; /* Ajuste a posição vertical da imagem */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`
export const Content = styled.div`
  width: 100%;
  padding-top: 20px;

  h3{
    line-height: 18px;
    text-transform: capitalize;
    margin-top: 50px;
  }

p{
  font-size: 12px;
  color: var(--color-hero);
}


`

export const Bolhas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;  

  .bolha{
    border-radius: 50%;
    border: 2px solid var(--color-base);
  }

  .bolha:nth-child(1){
    position: absolute;
    bottom: 0;
    left: 0;

    width: 150px;
    height: 150px;
  }
  .bolha:nth-child(2){
    width: 100px;
    height: 100px;
  }
` 

