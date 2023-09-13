import React, { ReactNode } from 'react';

import * as S from './secondary'
import { Header } from "../../components/header/header.tsx"
import { Footer } from "../../components/footer/footer.tsx"

import AboutBg from '/intro/aboutbg.png'

interface IntroTextProps {
  title: string;
  description: string;
}

interface Props {
  children: ReactNode,
  introText: IntroTextProps;
}



export const Layout : React.FC<Props> = ({ children, introText }) => {
  return (
    <S.Layout>
      <Header/>
      <S.Intro bgImage={AboutBg}>
        <h2>{introText.title}</h2>
        <p>{introText.description}</p>
      </S.Intro>
      {children}
      <Footer/>
    </S.Layout>

  ) 
}