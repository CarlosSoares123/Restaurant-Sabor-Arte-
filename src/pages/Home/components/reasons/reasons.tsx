import * as R from './reasons.ts'
import * as G from '../../../../styledGlobal.ts'

import img from '/homeImg/reasons/r1.jpg'
import img1 from '/homeImg/reasons/r2.jpg'

export const Reasons = () => {
  return(
    <R.ReasonsContainer>
      
      <R.figure>
        <img src={img1} alt="" />
      </R.figure>

      <R.text>
        <G.subtitle>Highest quality artisangrains, proteins & seasonal ingredients</G.subtitle>
        <p>Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desires, that they cannot foresee.</p>

        <R.lista>
          <div className="item">
            <R.item>Simple and easy to distinguish</R.item>
            <R.item>Pleasure of the momentblinded desire</R.item>
            <R.item>Able to do what we like best</R.item>
            <R.item>Simple and easy to distinguish</R.item>
          </div>

          <R.figure_1>
            <img src={img} alt="" />
          </R.figure_1>

        </R.lista>
      </R.text>
      
    </R.ReasonsContainer>
  )
}