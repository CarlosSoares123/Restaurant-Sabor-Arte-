import { Hero } from './components/hero/hero.tsx'
import { Day } from './components/day/day.tsx'
import { Reasons } from './components/reasons/reasons.tsx'
import { Offer } from './components/offer/offer.tsx'
import { Restaurant } from './components/restaurant/restaurant.tsx'
import { Why } from './components/why/why.tsx'
import { Testimonial } from './components/testimonial/testimonial.tsx'


import { StyledGlobal } from "../../styledGlobal.ts"
import { Layout } from '../../layouts/main/main.tsx'

export const Home = () => {
  return (
    <>
    <StyledGlobal/>
      <Layout>
      <Hero/>
      <Day/>
      <Reasons/>
      <Offer/>
      <Restaurant/>
      <Why/>
      <Testimonial/>
      </Layout>
    </>
  )
}