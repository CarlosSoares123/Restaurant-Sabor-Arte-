import * as D from './day'
import * as G from '../../../../styledGlobal.ts'

import cardData from '../../../../json/card_favorite.json'
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const Day = () => {

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
    <D.DayContainer>
      <G.title>
        Dish of the day
      </G.title>

      <D.card_container
      spaceBetween={35}
      slidesPerView={view}
      pagination={{clickable:true}}

      >
        {cardData.map((product: Product) => {
          return(
            <D.card>
              <D.figure>
                <img src={product.image} alt="#" />
              </D.figure>
              
              <D.content>
                <p className='name'>{product.name}</p>
                <p className='description'>{product.description}</p>
                <div className='price'><span>$</span>{product.price}</div>
              </D.content>
            </D.card>
          )
        })}
      </D.card_container>
      
    </D.DayContainer>
  )
}
