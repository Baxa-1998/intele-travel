import React from 'react'
import './help.scss'
import Image from 'next/image'
export default function Help() {
  return (
    <section className='help'>
  
      <div className="help__items">
        <div className="help__item">
          <Image  src='/assets/tour.jpg' width={400} height={300} alt='help'/> 
          <div className='help__text'>
            <h3>Помощь и поддержка</h3>
            <p>Если в процессе обучения возникнут сложности, вы  всегда сможете задать вопрос своему наставнику.</p>
            <p>Раз в несколько уроков вы будете получать большое задание, которое  нужно будет сдавать на проверку ментору. Он внимательно изучит ваш  вопрос,  и поможет вам стать лучше. </p>
          </div>
        </div>
        <div className="help__item">
          <Image  src='/assets/tour2.png' width={400} height={500} alt='help'/> 
          <div className='help__text'>
            <h3>Методика обучения</h3>
            <p>Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.</p>

          </div>
        </div>
      </div>
    </section>
  )
}
