import styled from 'styled-components'

export const ReasonsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  
  @media (min-width: 992px) {
  grid-template-columns: 350px 1fr;
}
`
export const figure = styled.figure`
  width: 100%;
  height: 200px;
  border-radius: 6px;
  overflow: hidden;
  

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 575px) {
  height: 300px;
  }
  @media (min-width: 992px) {
    width: 100%;
    height: 100%;
    img{
      object-fit: cover;
    }
  }
  @media (min-width: 1200px) {
    width: 100%;
    height: 100%;
}
`
export const text = styled.div`
  width: 100%;
  
`
export const lista = styled.ul`
  
  padding-top: 10px;
  background-color: pink;
  .item{
    display: flex;
    flex-direction: column;
    gap:15px;
    @media (min-width: 992px) {
      display: flex;
  }
    @media (min-width: 1200px) {
    width: 600px;
  }
  }
`
export const item = styled.li`
  list-style-type: none;
  padding-left: 0px;

  &::before {
  content: "✅"; /* Caractere para o sinalizador */
  margin-right: 5px;
  }
`
export const figure_1 = styled.figure`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 6px;
  overflow: hidden;
  
  img{
  width: 100% ;
  height: 100%;
  max-height: 250px;
  }
  
  @media (min-width: 992px) {
    display: flex;
  img{
    width: 100%;
    height: 250px;
  }
  }

  /* @media (min-width: 992px) {
  
  img{
    width: 300px;
    height: 250px;
  }
  } */
`

