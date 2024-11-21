'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import mainVector from '../../../public/assets/main-vector.png';
import './main.scss';
import Button from '@/components/ui/Button/Button';
import arrowTop from '../../../public/assets/arrow-top.png'
import { TimelineContent } from '@/utils/timelineAnimation';
export default function Main() {
  const mainRef = useRef(null)

  return (

  <main ref={mainRef} className="main">
    
      <div className="main-wrapper">
      <TimelineContent animationNum={0} timelineRef={mainRef}>
      <h1 className="main__title">
          Станьте профессиональным <br /> туристическим консультантом вместе <br />  с Intele Travel
        </h1>
      </TimelineContent>
      
        <div className='w-[365px] h-[1px] bg-[#DEDEDE] mt-5'></div>
        <TimelineContent animationNum={1} timelineRef={mainRef}>
        <p className="main__subtitle">
          Узнайте все о профессии туристического <br /> консультанта на нашем бесплатном вебинаре
        </p>
        </TimelineContent>
      
        <TimelineContent animationNum={2} timelineRef={mainRef}>
        <Button className={'main__btn'}>Запись на онлайн- <br /> вебинар <Image src={arrowTop} alt='main-btn' /></Button>
        </TimelineContent>
     
      </div>
    </main>
  
  
  );
}
