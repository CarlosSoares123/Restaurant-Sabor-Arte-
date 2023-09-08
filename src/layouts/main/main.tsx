import React, { ReactNode } from 'react';

import * as L from './main.ts'

import { Header } from "../../components/header/header.tsx"
import { Footer } from "../../components/footer/footer.tsx"

interface Props {
  children: ReactNode,
}

export const Layout: React.FC<Props> = ({ children }) => {
  return(
    <L.Layout>
      <Header/>
      <L.Main>
        {children}
      </L.Main>
      <Footer/>
    </L.Layout>
    
  )
}