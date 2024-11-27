'use client'
import React, { useRef } from 'react'
import './course.scss'
import Title from '@/components/ui/Title/Title'
import arrowTop from '../../../public/assets/arrow-top.png'
import Button from '@/components/ui/Button/Button'
import Image from 'next/image'
import { TimelineContent } from '@/utils/timelineAnimation'
export default function Course() {
  const courseRef = useRef(null)
  return (
    <section id='about' ref={courseRef} className='course'> 
      <TimelineContent animationNum={0} timelineRef={courseRef}>
      <Title>Что вы получаете на курсе ?</Title>
      </TimelineContent>
   
      <div className="course__wrapper">
          <div className="course__items">
            <div className="test">
            <TimelineContent animationNum={1} timelineRef={courseRef}>
            <div className='course__item bg-[#5096FF]'>Теория и практические задание</div>
            </TimelineContent>

            <TimelineContent animationNum={2} timelineRef={courseRef}>
            <div className='course__item bg-[#FFB359]'>Гибкий формат обучение</div>
            </TimelineContent>
            <TimelineContent animationNum={3} timelineRef={courseRef}>
            <div className='course__item bg-[#4BD071]'>Индивидуальная работа с ментором</div>
            </TimelineContent>
            
            <TimelineContent animationNum={4} timelineRef={courseRef}>
            <div className='course__item bg-[#50C0FF]'>Перспективы карьеры и дохода</div>
            </TimelineContent>
            <TimelineContent animationNum={5} timelineRef={courseRef}>
            <div className='course__item bg-[#4B77B9]'>Финальное задание и получение лицензии</div> 
            </TimelineContent>
           
            </div>
            <Button className={'course__btn'}>Начните обучение <br /> сегодня <Image src={arrowTop} alt='course-btn'/></Button>

          </div>
                  
          
      
      </div>
      
      
    </section>
  )
}
