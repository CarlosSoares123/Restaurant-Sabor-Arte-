import { StyledGlobal } from "../../styledGlobal.ts"
import { Layout } from '../../layouts/secondary/secondary.tsx'
import { Card } from './components/card/card.tsx'



export const About = () => {

  const introText ={
    title: 'About Us',
    description: 'Read our Story, How we started and about the Team',
  };

  return(
    <>
    <StyledGlobal/>
    <Layout 
    introText={introText}
    >
    <Card/>
    </Layout>
    </>
  )
}