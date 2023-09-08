import styled from 'styled-components'



export const TestimonialContainer = styled.section`
  width: 100%;
  height: 100%;

  gap: 10px;
` 

export const Content = styled.div`
  width: 100%;
  height: 100%;
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  text-align: center;
  display: grid;
  place-items: center;
  border-radius: 10px;
  cursor: pointer;

  figure{
    width: 100px;
    height: 100px;
    
    border: 3px solid var(--color-base);
    border-radius: 50%;
    overflow: hidden;
    
    img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
  }

  h4{
    font-size: 20px;
    font-weight: 400;
  }
  p{
    font-size: 14px;
  }
`