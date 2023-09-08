import styled from 'styled-components'


export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  padding-inline: 15px;
  display: grid;
  gap: 40px;

  background-color: rgba(255,131,25, 0.2);
`

export const FooterTop = styled.div`
  display: grid;
  gap: 40px; 
  padding-top: 50px;
  margin-bottom: 20px;



  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 0.8fr 0.8fr 1fr;
  }
`

export const Intro = styled.div`
`

export const Block = styled.ul`
  display: grid;
  align-items: center;
  gap: 10px; 
  
  
  .contact{
    display: flex;
    align-items: center;
    gap: 5px;
    
  }
`
export const Title = styled.li`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 15px;
  padding-top: 10px;
`
export const Link = styled.li`
  a{
    margin-top: 15px;
  }
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  border-bottom: 1px solid var(--color-base);

  i{
    color:var(--color-text) ;
    :hover{
      color:var(--color-base) ;
    }
  }
  li{
    font-size: 2.5rem;
  }
`


export const FooterBottom = styled.div`  
  padding: 15px 0;

  p{
  font-size: 1.3rem;
  text-align: center;
  a{
    padding-left: 5px;
    display: inline-block;
    color: var(--color-base);
    font-weight: 500;
  }
  }

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const FooterBottomList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;

  
`
export const BottomLink = styled.li`
  font-size: 1.3rem;
`