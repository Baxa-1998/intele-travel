'use client'

import './header.scss';
import facebook from '../../../public/assets/facebook.png';
import instagram from '../../../public/assets/instagram.png';
import vk from '../../../public/assets/vk.png';
import youtube from '../../../public/assets/youtube.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button'; 


import React, { useRef, useState } from 'react';
import { TimelineContent } from '@/utils/timelineAnimation';
import BurgerIcon from '@/components/ui/Burger/BurgerIcon';

export default function Header() {
  const [openBurger, setOpenBurger] = useState(false)
  const headerRef = useRef(null)


  return (
    <header ref={headerRef} className="header">  
    <div className="header__wrapper">
    <div  className="header__left">
    <TimelineContent animationNum={0} timelineRef={headerRef}>
    <Image src="/assets/logo.png" width={53} height={20} alt="logo" />
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
          <Link href="#">
            <li>Стоимость</li>
          </Link>
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
<div className="header__socials-item">
  <Image src={vk} alt="social" />
</div>
<div className="header__socials-item">
  <Image src={facebook} alt="social" />
</div>
<div className="header__socials-item">
  <Image src={youtube} alt="social" />
</div>
</div>
      </TimelineContent>
     

      <TimelineContent animationNum={3} timelineRef={headerRef}>
      {/* <div className="header__right">
        <Link href="#">Регистрация</Link>
        <Button className={'header__btn'}>
          {' '}
          <Image src={'/assets/arrow-right.png'} width={12} height={12} alt="arrow" /> Войти
        </Button>
      </div> */}
      </TimelineContent>
      <BurgerIcon openBurger={openBurger} setOpenBurger={setOpenBurger}/>
    </div>
    
 
    
    
    
    </header>
  );
}
