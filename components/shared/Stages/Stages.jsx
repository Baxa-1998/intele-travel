'use client'
import React, { useRef } from 'react';
import './stages.scss';
import Button from '@/components/ui/Button/Button';
import arrowTop from '../../../public/assets/arrow-top.png'
import Image from 'next/image';
import { TimelineContent } from '@/utils/timelineAnimation';
export default function Stages() {
  const stagesRef = useRef()
  return (
    <section ref={stagesRef} className="stages">
      <div className="stages__wrapper">
      <TimelineContent animationNum={1} timelineRef={stagesRef}>
      <div className="stages__items">
          <h2>01</h2>
          <h3>Весь материал разбит  на небольшие уроки</h3>
          <p>
            Теория и практика подаются <br /> маленькими порциями. Так <br /> вам будет легче усваивать <br /> новые
            знания.
          </p>
        </div>
      </TimelineContent>


      <TimelineContent animationNum={2} timelineRef={stagesRef}>
      <div className="stages__items">
          <h2>02</h2>
          <h3>Обучение через практику</h3>
          <p>
          Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.
          </p>
        </div>
      </TimelineContent>
      <TimelineContent animationNum={3} timelineRef={stagesRef}>
      <div className="stages__items">
          <h2>03</h2>
          <h3>Нет ограничений по времени</h3>
          <p>
          Можно совмещать учёбу с работой 
          и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.
          </p>
        </div>
      </TimelineContent>
      
      </div>
      <div className="btn-wrapper">
        <Button className={'stages__btn'}>Начать обучение <Image src={arrowTop} alt='stages-btn'/></Button>
        <p>Попробуйте, первые уроки <br /> бесплатны, но нужно пройти <br /> тестирование</p>
      </div>
    </section>
  );
}
