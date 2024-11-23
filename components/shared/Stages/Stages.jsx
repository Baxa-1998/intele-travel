import React from 'react';
import './stages.scss';
import Button from '@/components/ui/Button/Button';
import arrowTop from '../../../public/assets/arrow-top.png'
import Image from 'next/image';
export default function Stages() {
  return (
    <section className="stages">
      <div className="stages__wrapper">
        <div className="stages__items">
          <h2>01</h2>
          <h3>Весь материал разбит  на небольшие уроки</h3>
          <p>
            Теория и практика подаются <br /> маленькими порциями. Так <br /> вам будет легче усваивать <br /> новые
            знания.
          </p>
        </div>
        <div className="stages__items">
          <h2>02</h2>
          <h3>Обучение через практику</h3>
          <p>
          Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.
          </p>
        </div>
        <div className="stages__items">
          <h2>03</h2>
          <h3>Нет ограничений по времени</h3>
          <p>
          Можно совмещать учёбу с работой 
          и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.
          </p>
        </div>
      </div>
      <div className="btn-wrapper">
        <Button className={'stages__btn'}>Начать обучение <Image src={arrowTop} alt='stages-btn'/></Button>
        <p>Попробуйте, первые уроки <br /> бесплатны, но нужно пройти <br /> тестирование</p>
      </div>
    </section>
  );
}
