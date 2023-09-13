import * as W from './why'
import * as G from '../../../../styledGlobal'

const card_why = [
  {
    id: "1",
    image: "/homeImg/icon/icon1.png" ,
    title: "Passionate Chefs",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, unde."
  },
  {
    id: "2",
    image: "/homeImg/icon/icon2.png" ,
    title: "Passionate Chefs",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, unde."
  },
  {
    id: "3",
    image: "/homeImg/icon/icon3.png" ,
    title: "Passionate Chefs",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, unde."
  }
]

export const Why = () => {
  return(
    <W.WhyContainer>
      <G.title>Why We are the best</G.title>

      <W.content>

            {
              card_why.map((card) => {
                return(
                  <W.card>
                  <span>{card.id}</span>
                    <W.figure>
                      <img src={card.image} alt="#" />
                    </W.figure>

                    <W.text>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </W.text>
                      </W.card>
                )
              })
            }

      </W.content>

    </W.WhyContainer>
  )
}