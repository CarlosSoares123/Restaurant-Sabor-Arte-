import styled from 'styled-components'

interface Props {
  bgImage: string;
}


export const Layout = styled.body`
`
export const Main = styled.main`
  @media (min-width: 575px) {
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
}
  @media (min-width: 768px) {
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
}
  @media (min-width: 992px) {
    max-width: 960px;
}
  @media (min-width: 1200px) {
    max-width: 1200px;
}
`

export const Intro = styled.section<Props>`
  width: 100%;
  height: 280px;
  margin-top: 95px;

  border: 1px solid #000;
  background: url(${(props) => props.bgImage});
  background-position-x: -750px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;



  @media(min-width: 690px){
    background-position-x: -400px;
  }
  @media(min-width: 1032px){
    background-position-x: -200px;
  }
  @media(min-width: 1100px){
    background-position-x: initial;
  }
`