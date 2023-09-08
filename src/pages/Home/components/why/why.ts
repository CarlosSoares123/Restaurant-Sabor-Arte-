import { styled } from "styled-components";


export const WhyContainer = styled.section `
  width: 100%;
  height: 100%;
  display: grid;
  gap: 15px;
  
`
export const content = styled.ul`
  width: 100%;
  height: 100%;

  display: grid;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    display: flex;
    align-items: center;
  }
  
`



export const card = styled.li`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.35);

  cursor: pointer;
  display: grid; 
  place-items: center;
  transition: all.4s ease;

  position: relative;
  z-index: 1;

  span{
    position: absolute;
    top: .8rem;
    right: 2rem;
    z-index: -1;

    clip-path: circle();
    display: grid;
    place-items: center;

    width: 70px;
    height: 70px;
    font-size: 20px;
    background-color: var(--color-base);
  }
  @media (min-width: 768px) {


  }



  &:hover{
    background-color: var(--color-base);
    color: #fff;
    
    span{
      background-color: #fff;
      color: var(--color-base);
    }
  }
`

export const figure = styled.figure`
  width: 100px;
  height: 100px;
  

  img{
  width: 100%;
  height: 100%;
  }

  
`

export const text = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;

  text-align: center;
  gap: 10px;
`

export const button = styled.button`
  
`



