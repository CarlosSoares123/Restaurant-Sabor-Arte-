import * as H from './hero'
import * as G from '../../../../styledGlobal.ts'

// Images
import food0 from '/homeImg/png/p1.png'
import food1 from '/homeImg/png/p2.png'
import food2 from '/homeImg/png/p3.png'
import food3 from '/homeImg/png/p4.png'

export const Hero = () => {
  return (
    <H.HeroContainer>

      {/* <H.Bolhas>
        <div className="bolha"></div>
        <div className="bolha"></div>        
      </H.Bolhas> */}

      <H.container_text>
          
          <G.title>
            Best in Town
          </G.title>

          <H.title_hero>
            Get ready for a Journey of <span>Incredible Flavors!</span> 
          </H.title_hero>

          <H.description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis. Distinctio error incidunt, dignissimos corrupti illum ipsam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </H.description>

          <H.btns>
            <G.btn>About us</G.btn>
          </H.btns>
          
      </H.container_text>

      <H.container_img>
          <H.card>
            <H.Figure>
              <img src={food0} alt="" />
            </H.Figure>
            <H.Content>
              <h3> Pepperoni Supreme</h3>
              <p>Clássicos de Carnes</p>
              <span> $ 12.99</span>
            </H.Content>
            
            <H.Content>
            </H.Content>
          </H.card>

          <H.card>
            <H.Figure>
              <img src={food1} alt="" />
            </H.Figure>
            <H.Content>
              <h3>Margherita Fresca</h3>
              <p>Veggie Delight</p>
              <span>$ 24.4</span>
            </H.Content>
            
          </H.card>

          <H.card>
            <H.Figure>
              <img src={food2} alt="" />
            </H.Figure>
            <H.Content>
              <h3>icecream</h3>
              <p>Chocolate & Vanilha</p>
              <span>$ 24.4</span>
            </H.Content>
            
          </H.card>

          <H.card>
            <H.Figure>
              <img src={food3} alt="" />
            </H.Figure>
            <H.Content>
              <h3>Burger</h3>
              <p>Chocolate & Vanilha</p>
              <span>$ 30</span>
            </H.Content>
            
          </H.card>

      </H.container_img>

    </H.HeroContainer>
  );
};

