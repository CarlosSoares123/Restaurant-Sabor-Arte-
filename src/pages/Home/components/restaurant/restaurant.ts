import styled from 'styled-components'

export const RestaurantContainer = styled.section`
  width: 100%;
  height: 100%;

  
`
export const FigureContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;


`
export const TwoImg = styled.figure`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
    
  img{
    width: 100%;
    height: 150px;
  }
`
export const BigImg = styled.figure`
  width: 100%;
  height: 100%;
  
  img{
    width: 100%;
    height: 100%;
  }
`


export const Content =  styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;

  @media (min-width: 992px) {
    display: grid;
    gap: 15px;
    grid-template-columns: 0.8fr 1fr;
    align-items: center;
  }
`
export const ContentText = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 15px;
  

  @media (min-width: 992px) {
  gap: 5px;
  }
`
export const Header = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    
  }
`

export const list = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media (min-width: 992px) {
    gap: 20px;
    
  }

`
export const item = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;


  figure{
    width: 150px;
    height:fit-content;
    border-radius: 50%;
    padding: 15px;
    border: 1px solid var(--color-base);
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: 768px) {
      width: 100px;
    }
  }
    
`