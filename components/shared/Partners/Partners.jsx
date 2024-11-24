import Title from '@/components/ui/Title/Title';
import Image from 'next/image';
import React from 'react';
import './partners.scss'
import PartnersLogo from './PartnersLogo';
export default function Partners() {
  return (
    <section className="partners">
      <Title>Наши партнеры</Title>
      <div className="partners__items">
        <div className="partners__item">
          <Image src="/assets/training/1.png" width={60} height={60} alt="partners-logo" />
          <p>
            Весь курс разбит на несколько блоков. <br /> Оплата поэтапная вы платите только <br />{' '}
            за тот блок, который сейчас проходите.
          </p>
        </div>
        <div className="partners__item">
          <Image src="/assets/training/1.png" width={60} height={60} alt="partners-logo" />
          <p>
            Весь курс разбит на несколько блоков. <br /> Оплата поэтапная вы платите только <br />{' '}
            за тот блок, который сейчас проходите.
          </p>
        </div>
        <div className="partners__item">
          <Image src="/assets/training/1.png" width={60} height={60} alt="partners-logo" />
          <p>
            Весь курс разбит на несколько блоков. <br /> Оплата поэтапная вы платите только <br />{' '}
            за тот блок, который сейчас проходите.
          </p>
        </div>
      </div>
      <div className='mt-[50px]'>
      <PartnersLogo/>
      </div>
     
    </section>
  );
}
