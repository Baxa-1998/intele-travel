'use client'
import React, { useRef } from 'react'
import './training.scss'
import Title from '@/components/ui/Title/Title'
import { TimelineContent } from '@/utils/timelineAnimation'
import Image from 'next/image'
export default function Training() { 
  const trainingRef = useRef(null)
  const trainingData = [
    {
      id: 1,
      img: "/assets/training/1.png",
      title: 'Огромное \n количество практики',
      subtitle: 'Более 500 самостоятельных \n заданий и 20 полноценных \n больших проектов',
      className: "shake"
    },
    {
      id: 2,
      img: "/assets/training/2.png",
      title: 'Современные \n методики обучения',
      subtitle: 'Спиральное обучение: \n погружаемся в материал \n постепенно, виток за витком',
      className: "rotate"

    },
    {
      id: 3,
      img: "/assets/training/3.png",
      title: 'Простое и понятное \n изложение',
      subtitle: 'Вместо заумных \n терминов \n – примеры из реального мира',
      className: "test"
    },
    {
      id: 4,
      img: "/assets/training/4.png",
      title: 'Гибкий график \n занятий',
      subtitle: 'Учитесь в любое \n время в удобном \n для вас темпе',
           className: "shake"
    },
    {
      id: 5,
      img: "/assets/training/5.png",
      title: 'Прямая связь с \n опытными менторами',
      subtitle: 'Ответят на все ваши \n вопросы и помогут с \n разбором сложных тем',
       className: "test"
    },
    {
      id: 6,
      img: "/assets/training/6.png",
      title: 'Бонусы',
      subtitle: 'После окончания курса вы \n получаете 4 дневный тур по Чикаого',
        className: "fullRotate"
    },
  ]
  return (
    <section ref={trainingRef} className='training'>
      <TimelineContent animationNum={3} timelineRef={trainingRef}>
      <Title>Обучение в Intele Travel – это <br /> удобно и результативно</Title>
      </TimelineContent>
      <div className="training__wrapper">
        {trainingData.map((item)=>(
             <div key={item.id} className="training__item">
             <Image className={item.className} src={item.img} width={58} height={58} alt='training'/> 
             <h2>{item.title}</h2>
             <p>{item.subtitle}</p>
           </div>
        ))}
{/*      
        <div className="training__item"></div>
        <div className="training__item"></div>
        <div className="training__item"></div>
        <div className="training__item"></div>
        <div className="training__item"></div>
        <div className="training__item"></div> */}
      </div>
     
    </section>
  )
}
