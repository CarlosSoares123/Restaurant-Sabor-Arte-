import { Logo } from '../header/header'
import * as F from './footer'

import { BsFacebook, BsWhatsapp, BsInstagram, BsFillEnvelopeFill, BsFillTelephoneFill, BsGeoAltFill} from "react-icons/bs";

export const Footer =() => {
  return(
    <F.FooterContainer>

      <F.FooterTop>
        
        <F.Intro>
        <Logo>
          <img src="/logo.png" alt="" />
          <h1>Sabor&Arte</h1>
        </Logo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, odio.adipisicing elit. Inventore, odio.
        </p>
        </F.Intro>

        <F.Block>
        <F.Title>
          <p>Menu Link</p>
        </F.Title>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li><li>
            <a href="">Food Menu</a>
          </li><li>
            <a href="">Pages</a>
          </li>
        </F.Block>

        <F.Block>
        <F.Title>
          <p>Services</p>
        </F.Title>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">akeaway Services</a>
          </li>
        </F.Block>

        <F.Block>
          <F.Title>Contact Us</F.Title>
            <li className="contact">
              <BsGeoAltFill style={{color: 'var(--color-base)', 'fontSize':'22px'}}/> 
              Delicious City,
            London 9578, UK
            </li>
            <li className="contact">
              <BsFillTelephoneFill style={{color: 'var(--color-base)', 'fontSize':'22px'}}/>
              <p>(+244) 999 999 999</p>
            </li>
            <li className="contact" >
              <BsFillEnvelopeFill style={{color: 'var(--color-base)', 'fontSize':'22px'}}/>
              <p>carlossoares@gmail.com</p>
            </li>

            <F.Contact>
            <li><i><BsWhatsapp/></i></li>
            <li><i><BsFacebook/></i></li>
            <li><i><BsInstagram/></i></li>
            </F.Contact>
        </F.Block>

      </F.FooterTop>

      <F.FooterBottom>
        <p>
            &copy; 2023 Sabor&Arte | All Rights Reserved by
            <a href="https://carlossoares.netlify.app/">Carlos Soares</a> 
        </p>

        <F.FooterBottomList>
          <F.BottomLink>
              Privacy Policy
          </F.BottomLink>
          <F.BottomLink>
              Terms of Use
          </F.BottomLink>
        </F.FooterBottomList>
      </F.FooterBottom>

    </F.FooterContainer>
  )
}

