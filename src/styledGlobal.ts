import styled,{ createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

/* Importa a fonte do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body{
  background: var(--cor-bg);
}
:root{
  --color-base: #ff8319;
  --color-bg: #FFF8EE;
  --color-title: #191C20;
  --color-text: #454545e3;
  --color-hover: #D3D3D3;

  //font-size
  
  --fs-text: 1.1rem ;
  --fs-title: 2rem ;
  
}
/*«««««««««««Precrição»»»»»»»»»»»»*/

*,
b*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li { list-style: none; }

a{
  color: inherit;
  text-decoration: none;
}

a,
img,
span, 
button,
ion-icon{
  display: block;
}

img { height: auto; }

input,
button {
  background: none;
  border: none;
  font: inherit;

  outline: none;

}

input{
  width: 100%;
}

button{
  cursor: pointer;
}

i{
  pointer-events: none;
}
address{
font-style: normal;
}

.icons{
  font-size: 2.3rem;
  cursor: pointer;
  border-radius: 50%;
  transition: .4s ease-in-out;
  
  &:hover{
    color: var(--color-base);
    box-shadow: 1px 2px 8px 3px  var(--color-base);
  }
}


html{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  scroll-behavior: smooth;
}

body{
  background-color: var(--color-bg);
  color: var(--color-title);
  font-size: 1.6rem;
  font-family: Poppins;
  line-height: 1.7;
}

section{
  padding-inline: 8px;
  margin-block-end: 50px;
}
`

export const title = styled.h2`
  width: fit-content;
  border-radius: 15px;
  font-size: 15px;
  padding: 2px 15px;
  color: var(--color-base);
  background-color: rgba(255,131,25, 0.2);
`
export const btn_icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const btn = styled.button`
  width: 100%;
  padding: 5px 15px;
  font-weight: 700;
  background-color: var(--color-base);
  outline: 10px;
  border-radius: 5px;
  transition: all.4s;

  &:hover{
    color: #fff;
    outline: none;
  }
`
export const subtitle = styled.h3`
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--color-base);
`