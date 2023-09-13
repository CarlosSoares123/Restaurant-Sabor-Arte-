import * as T from './testimonial'
import * as G from '../../../../styledGlobal'
import { Swiper, SwiperSlide } from 'swiper/react'

import { register } from 'swiper/element/bundle'

import { useState, useEffect } from 'react'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const client = [
  {
    id: 0,
    image: "/homeImg/face/02.jpg",
    name: "Carlos Soares",
    testimonial: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ..."
  },

  {
    id: 1,
    image: "/homeImg/face/01.jpg",
    name: "Carlos Soares",
    testimonial: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ..."
  },

  {
    id: 2,
    image: "/homeImg/face/03.jpg",
    name: "Carlos Soares",
    testimonial: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ..."
  },

  {
    id: 3,
    image: "/homeImg/face/04.jpg",
    name: "Carlos Soares",
    testimonial: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ..."
  },

  {
    id: 4,
    image: "/homeImg/face/05.jpg",
    name: "Carlos Soares",
    testimonial: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ..."
  },

]

interface props {
  id: number,
  image: string,
  name: string,
  testimonial: string,
}


export const Testimonial = () => {
  const [view, setView] = useState(1)

  useEffect(()=> {
    const handleRezise = () => {
      if(window.innerWidth >= 992 ) {
        setView(3)
      }else if(window.innerWidth > 750 ) {
        setView(2)
      }else {
        setView(1)
      }        
    }

    handleRezise()
    window.addEventListener("rezize", handleRezise)
    return() => {
    window.addEventListener("rezize", handleRezise)
    }

  }, [])
  return(
    <T.TestimonialContainer>
      <G.title>Testimonial</G.title>
      <G.subtitle>Review from our guests</G.subtitle>

      <T.Content>
        <Swiper
        spaceBetween={25}
        slidesPerView={view}
        >
          {
            client.map((client: props) => (
              <SwiperSlide>
                <T.Card key={client.id}>
                  <figure>
                    <img src={client.image} alt="" />
                  </figure>
                  <h4>{client.name}</h4>
                  <p>{client.testimonial}</p>
                </T.Card>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </T.Content>

    </T.TestimonialContainer>
  )
}

