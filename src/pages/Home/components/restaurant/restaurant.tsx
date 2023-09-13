import * as R from './restaurant'
import * as G from '../../../../styledGlobal'

import img from '/homeImg/restaurant/r1.jpg'
import img2 from '/homeImg/restaurant/r2.jpg'
import img3 from '/homeImg/restaurant/r3.jpg'

import icon1 from '/homeImg/icon/icon4.png'
import icon2 from '/homeImg/icon/icon2.png'
import icon3 from '/homeImg/icon/icon6.png'

export const Restaurant = () => {
  return(
    <R.RestaurantContainer>
      
      <G.title>
        Our Restaurant
      </G.title>

      <R.Content>

      <R.FigureContainer>
        <R.TwoImg>
        <img src={img} alt="" />
        <img src={img2} alt="" />
        </R.TwoImg>

        <R.BigImg>
        <img src={img3} alt="" />
        </R.BigImg>
      </R.FigureContainer>

      <R.ContentText>
        
        <R.Header>

        <G.subtitle>For every specialoccasion there is heritaste</G.subtitle>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, ducimus et nisi illum eius autem vero porro perferendis.</p>
        
        </R.Header>

        <R.list>
          <R.item>
            <figure>
              <img src={icon1} alt="" />
            </figure>
            <div className="text_item">
            <h4>Sucess Story</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing eR.itemt. Illum, voluptatum?</p>
            </div>

          </R.item>
          <R.item>
            <figure>
              <img src={icon2} alt="" />
            </figure>
            <div className="text_item">
            <h4>Passionate Chefs</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing eR.itemt. Illum, voluptatum?</p>
            </div>
          </R.item>
          <R.item>
            <figure>
              <img src={icon3} alt="" />
            </figure>
            <div className="text_item">
            <h4>Passionate Chefs</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing eR.itemt. Illum, voluptatum?</p>
            </div>
          </R.item>
        </R.list>

      </R.ContentText>

      </R.Content>

    </R.RestaurantContainer>
  )
}
