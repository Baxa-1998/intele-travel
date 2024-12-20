import React, { useRef } from 'react';
import './mentors.scss';
import Title from '@/components/ui/Title/Title';
import Image from 'next/image';
import mentor1 from '../../../public/assets/mentors/1.jpg';
import mentor2 from '../../../public/assets/mentors/2.jpg';
import { TimelineContent } from '@/utils/timelineAnimation';
export default function Mentors() {
  const mentorsRef = useRef()
  return (
    <section ref={mentorsRef} className="mentors">
        <TimelineContent animationNum={1} timelineRef={mentorsRef}>
        <Title>Наши опытные менторы</Title>
        </TimelineContent>
     
      <div className="mentors__items">
      <TimelineContent animationNum={2} timelineRef={mentorsRef}>
      <div className="mentors__item">
          <Image src={mentor1} alt="mentors" />
          <h3>
            Юлия
            <br />мама 3х сыновей.{' '}
          </h3>
          <p>
            Я в Америке с 2019 года, до этого 12 лет жила в Италии. В бизнесе с 2021 года, пришла в
            туризм для собственных нужд, а затем появились первые клиенты. Хорошо знаю Европу,
            поэтому предлагаю персональные маршруты, а также продаю туры с all inclusive, круизы и
            страховки. Радуюсь, что клиенты возвращаются и рекомендуют меня. Туризм — бескрайняя
            сфера, всегда есть чему учиться! Не стесняйтесь задавать вопросы, мы поможем вам быстро
            познакомиться с туризмом!
          </p>
        </div>
      </TimelineContent>
      <TimelineContent animationNum={3} timelineRef={mentorsRef}>
      <div className="mentors__item">
          <Image src={mentor2} alt="mentors" />
          <h3>
            Илона Нестерова <br /> в туристическом бизнесе уже более 3 лет.{' '}
          </h3>
          <p>
          Люблю планировать путешествия для всей семьи, а особенно круизы. 
            Я сертифицированный круизный консультант и член CLIA. Побывала в более 40 круизах и
            отправила столько же гостей. Мои любимые направления — Дисней и Юниверсал, как мама
            двоих детей, хорошо знаю парки и аттракционы. Помогу с выбором ниши и прохождением
            сертификации.
          </p>
        </div>    
      </TimelineContent>
      <TimelineContent animationNum={4} timelineRef={mentorsRef}>
      <div className="mentors__item">
          <Image src={mentor2} alt="mentors" />
          <h3>
            Илона Нестерова <br /> в туристическом бизнесе уже более 3 лет.{' '}
          </h3>
          <p>
            В Америке я с 2019 года, до этого прожила 12 лет в Италии. В бизнесе я с 2021 года.
            Пришла в туризм для своих бизнес потребностей, постепенно появились первые клиенты. Я
            хорошо знаю Европу поэтому делаю персональные маршруты клиентам, также продаю all
            inclusive , круизы и страховки к ним! Я очень рада что мои клиенты возвращаются ко мне
            постоянно и советуют меня своим знакомым.{' '}
          </p>
        </div>
      </TimelineContent>
   
      </div>
    </section>
  );
}
