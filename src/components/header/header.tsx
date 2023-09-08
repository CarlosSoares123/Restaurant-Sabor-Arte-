import { useState, useEffect } from 'react';
import * as H from './header.ts'

import { MdOutlineDehaze, MdLocationOn, MdOutlineLocalPhone, MdAlarmOn, MdMailOutline, MdClear } from "react-icons/md";

export const Header = () => {
  
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setIsHeaderTransparent(true);
      } else {
        setIsHeaderTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  
  const [isVisible, setIsVisible] = useState(false)

  const modalOpen = () => {
    setIsVisible(true)
  }
  const closeModal = () => {
    setIsVisible(false)
  }
  
  
  return (
    <H.Container>

        <H.topbar>
        <div>
          <div className="container">

            <address>
              <div>
              <i><MdLocationOn/></i>
            </div>

              <span>
              Restaurant St, Delicious City, London 9578, UK
              </span>
            </address>

            <div className="separator"></div>

            <div >
              <div >
                <i> <MdAlarmOn/></i>
              </div>

              <span className="span">Daily : 8.00 am to 10.00 pm</span>
            </div>

            <a href="tel:+11234567890" >
              <div>
                <i><MdOutlineLocalPhone/></i>
              </div>

              <span >+1 123 456 7890</span>
            </a>

            <div className="separator"></div>

      <a href="mailto:booking@restaurant.com">
        <div>
          <i><MdMailOutline/></i>
        </div>

        <span>booking@restaurant.com</span>
      </a>

          </div>
        </div>
        </H.topbar>

      <H.header transparent={isHeaderTransparent}>
      <H.Logo href="#">
        <img src="/logo.png" alt="" />
        <h1>Sabor&Arte</h1>
      </H.Logo>

      <H.navbar visible={isVisible}>

        <H.logo_navbar>
          <H.Logo href="#">
            <img src="/logo.png" alt="" />
            <h1>Sabor&Arte</h1>
          </H.Logo>
        <MdClear className='btn_close' onClick={closeModal}/>
        </H.logo_navbar>

        <H.nav_list>

          <H.nav_link>
            <a href="#" onClick={closeModal}>
              <span>Home</span>
            </a>
          </H.nav_link>

          <H.nav_link>
            <a href="#" onClick={closeModal}>
              <span className="span">About Us</span>
            </a>
          </H.nav_link>

          <H.nav_link>
            <a href="#" onClick={closeModal}>
              <span>Food Menu</span>
            </a>
          </H.nav_link>
          
          <H.nav_link>
            <a href="#" onClick={closeModal}>

              <span>Pages</span>
            </a>
          </H.nav_link>

          <H.nav_link>
            <a href="#" onClick={closeModal}>
              <span>Contact Us</span>
            </a>
          </H.nav_link>

        </H.nav_list>

        <H.invitation>
          <p>Visit Us</p>
          <address>
            Restaurant St, Delicious City,
            London 9578, UK
          </address>
          <p>
            Open: 9.30 am - 2.30pm
          </p>
          <a href="mailto:booking@grilli.com">
            booking@grilli.com
          </a>
          <p>Booking Request</p>
          <a href="tel:+88123123456">
            +88-123-123456
          </a>
        </H.invitation>

      </H.navbar>

      <H.btn_open onClick={modalOpen}>
        <MdOutlineDehaze/>
      </H.btn_open>
      
      </H.header>

    </H.Container>
  );
};
