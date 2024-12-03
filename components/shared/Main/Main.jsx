'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import mainVector from '../../../public/assets/main-vector.png';
import './main.scss';
import Button from '@/components/ui/Button/Button';
import arrowTop from '../../../public/assets/arrow-top.png'
import { TimelineContent } from '@/utils/timelineAnimation';
import line from '../../../public/assets/line.svg'
import pc from '../../../public/assets/main-vector.png'
import Header from '../Header/Header';
export default function Main({burger, setBurger}) {
  const mainRef = useRef(null)

  return (

  <main ref={mainRef} className="main">
         <Header burger={burger} setBurger={setBurger}/>
    
      <div className="main-wrapper">
        <div className='main__content'>
        <TimelineContent animationNum={0} timelineRef={mainRef}>
      <h1 className="main__title">
          Станьте профессиональным <br /> туристическим консультантом вместе <br />  с Intele Travel <span className='text-[#F12525]'>Бесплатно</span>
        </h1>
      </TimelineContent>
      
        <div className='w-[365px] h-[1px] bg-[#DEDEDE] mt-5 ml-[50%] lg:ml-0 translate-x-[-50%] lg:translate-x-0'></div>
        <TimelineContent animationNum={1} timelineRef={mainRef}>
        <p className="main__subtitle">
          Узнайте все о профессии туристического <br /> консультанта на нашем бесплатном вебинаре
        </p>
        </TimelineContent>
      
        <TimelineContent animationNum={2} timelineRef={mainRef}>
        <Button className={'main__btn'}>Записаться на онлайн- <br /> вебинар <Image src={arrowTop} alt='main-btn' /></Button>
        </TimelineContent>
        </div>
        {/* <Image className='pc' src={pc} width={500} height={500} alt='pc'/> */}
    
     
      </div>
      <a href='#about' className='scroll__down'>
      <svg data-v-30527de8="" viewBox="0 0 16 15" preserveAspectRatio="none" className="svg-icon svg-icon--arrow-scroll-bottom" style={{width: '1.07em'}}>
<path xmlns="http://www.w3.org/2000/svg" d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34315C15.4616 7.95262 15.4616 7.31946 15.0711 6.92893C14.6805 6.53841 14.0474 6.53841 13.6569 6.92893L8 12.5858L2.34315 6.92893C1.95262 6.53841 1.31946 6.53841 0.928932 6.92893C0.538408 7.31946 0.538408 7.95262 0.928933 8.34315L7.29289 14.7071ZM7 1L7 14L9 14L9 1L7 1Z"></path>
</svg>
      </a>
      <div className="line__left"></div>
      <div className='line__content'>
   
      </div>
      <div className="line__right"></div>
    
    </main>
  
  
  );
}
