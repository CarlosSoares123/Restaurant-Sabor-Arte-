import styled from 'styled-components';


export const CategoryContainer = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 15px;
`

export const tag = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column ;
  gap: 15px;

  overflow: hidden;
`
export const lista = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;

  gap: 10px;
  overflow: auto;

  /* Oculta a barra de rolagem */
  scrollbar-width: none; /* Para navegadores que suportam a propriedade scrollbar-width */
  -ms-overflow-style: none; /* Para navegadores Microsoft */
  &::-webkit-scrollbar {
    width: 0; /* Para navegadores WebKit (Chrome, Safari, etc.) */
  }
`
export const item = styled.li`
  border-radius: 5px;
  white-space: nowrap; /* Impede que o texto quebre a linha */
  background-color: var(--color-base);
  color: var(--color-text);
  padding-inline: 10px;
  font-weight: bold;
`


export const menu = styled.div`
  width: 100%;
  height: 100%;

  background-color: greenyellow;
`

export const card = styled.div`

`
export const figure = styled.figure`

`

export const content = styled.div`

`