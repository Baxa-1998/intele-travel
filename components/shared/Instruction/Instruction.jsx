import React from 'react';
import './instruction.scss';
import Image from 'next/image';
import instruction from '../../../public/assets/instruction.png';
import Button from '@/components/ui/Button/Button';
import arrowTop from '../../../public/assets/arrow-top.png'
export default function Instruction() {
  return (
    <section className="instruction">
      <Image src={instruction} alt="instruction" />
      <p>
        Все блоки проходятся строго по порядку. Пропустить какой-то блок или <br /> начать обучение с
        середины нельзя, даже если вы считаете, что уже <br /> знаете какую-то часть материала. Только так
        мы можем гарантировать, <br /> что вы получите все знания, предусмотренные учебной программой.
      </p>
      <Button className={'instruction__btn'}>Запись на онлайн- <br /> вебинар <Image src={arrowTop} alt='instruction'/></Button>
    </section>
  );
}
