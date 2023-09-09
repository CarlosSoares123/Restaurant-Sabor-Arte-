import styled from 'styled-components';


export const DayContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  

   /* Estilo para os indicadores de paginacao (bolinhas) */
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #bbb;
    opacity: 1;
    transition: background-color 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: #333;
  }
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Estilo para as setas de navegacao */
  .swiper-button-prev,
  .swiper-button-next {
    font-size: 24px;
    color: #fff;
    background-color: #333;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: #555;
  }
  
`

export const figure = styled.figure`
  max-width: 100%;
  height: 250px;
  
  img{
  width: 100%;
  height: 100%;
  }
`

export const content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  .name{
  font-size: 18px;
  font-weight: bold;
  }

  .description{
  font-size: 14px;
  color: #555;
  }

  .price{
    display: flex;
    gap: 5px;

    font-size: 16px;
    font-weight: bold;
    
    span{
      color: var(--color-base);
    }
  }

`
