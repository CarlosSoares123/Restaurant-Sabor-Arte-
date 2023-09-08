import styled from 'styled-components'

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