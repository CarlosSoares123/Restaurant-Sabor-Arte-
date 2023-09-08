import styled from 'styled-components'

export const OfferContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 15px;

`

export const container_swiper = styled.div`
  width: 100%;

  figure{
    width: 100%;
    height: 150px;
    
    img{
    width: 100%;
    height: 100%;
    
    }
  }

  @media (min-width: 575px) {
    figure{
      height: 200px;
    }
  }
  @media (min-width: 768px) {
    figure{
      height: 200px;
    }
  }

`