'use client'

import './header.scss';
import facebook from '../../../public/assets/facebook.png';
import instagram from '../../../public/assets/instagram.png';
import vk from '../../../public/assets/vk.png';
import youtube from '../../../public/assets/youtube.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button'; 
import logo from '../../../public/assets/logo.png'

import React, { useRef, useState } from 'react';
import { TimelineContent } from '@/utils/timelineAnimation';
import BurgerIcon from '@/components/ui/Burger/BurgerIcon';

export default function Header({setBurger, burger}) {
  const [openBurger, setOpenBurger] = useState(false)
  const headerRef = useRef(null)


  return (
    <header ref={headerRef} className="header">  
    <div className="header__wrapper">
    <div  className="header__left">
    <TimelineContent animationNum={0} timelineRef={headerRef}>
    <Image src={logo}  alt="logo" />
    </TimelineContent>

      </div>
      <TimelineContent animationNum={1} timelineRef={headerRef} >
      <div className="header__center">
        <ul>
          <Link href="#">
            <li>Чему вы научитесь</li>
          </Link>
          <Link href="#">
            <li>Процесс обучение</li>
          </Link>
          {/* <Link href="#">
            <li>Стоимость</li>
          </Link> */}
          <Link href="#">
            <li>Контакты</li>
          </Link>
        </ul>
      </div>
      </TimelineContent>
      

      <TimelineContent animationNum={2} timelineRef={headerRef}>
      <div className="header__socials">

<div className="header__socials-item">
  <Image src={instagram} alt="social" />
</div>
{/* <div className="header__socials-item">
  <Image src={vk} alt="social" />
</div> */}
<div className="header__socials-item">
  <Image src={facebook} alt="social" />
</div>
<div className="header__socials-item">
  <Image src={youtube} alt="social" />
</div>
</div>
      </TimelineContent>
     

    
      <BurgerIcon burger={burger} setBurger={setBurger}/>
    </div>
    
 
    
    
    
    </header>
  );
}
