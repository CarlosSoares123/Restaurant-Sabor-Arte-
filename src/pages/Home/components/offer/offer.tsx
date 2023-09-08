import * as O from './offer.ts'
import * as G from '../../../../styledGlobal.ts'
import { Swiper, SwiperSlide } from 'swiper/react'


import { useEffect, useState } from 'react';

import cardData from '../../../../json/offer.json'

import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'



interface offer {
  image: string;
  description: string;
}

export const Offer = () => {
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
    <O.OfferContainer>
      
      <G.title>
        Our Restaurant
      </G.title>

      <O.container_swiper>
        <Swiper
        spaceBetween={25}
        slidesPerView={view}
        pagination={{clickable:true}}
        >
          {
          cardData.map((product: offer) => {
            return(
              <SwiperSlide>
              <figure>
                <img src={product.image} alt={product.description} />
              </figure>
              </SwiperSlide>
            )
          })
          }
        </Swiper>
      </O.container_swiper>

    </O.OfferContainer>
  )
}