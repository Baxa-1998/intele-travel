import React from 'react'
import './footer.scss'
import facebook from '../../../public/assets/facebook.png';
import instagram from '../../../public/assets/instagram.png';
import vk from '../../../public/assets/vk.png';
import youtube from '../../../public/assets/youtube.png';
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <div className="footer__left">
          <Image src='/assets/logo.png'  width={87} height={32} alt='footer-logo'/>
          <div className='footer__socials'>
            <div className="footer__socials-item">
            <Image src={instagram} alt="social" />
            </div>
            {/* <div className="footer__socials-item">
            <Image src={vk} alt="social" />
            </div> */}
            <div className="footer__socials-item">
            <Image src={facebook} alt="social" />
            </div>
            <div className="footer__socials-item">
            <Image src={youtube} alt="social" />
            </div>
          </div>
        </div>
        <div className="footer__center">
          <ul>
            <a href="#"><li>Чему вы научитесь</li></a>
            <a href="#"><li>Процесс обучения</li></a>
            {/* <a href="#"><li>Стоимость</li></a> */}
            <a href="#"><li>Контакты</li></a>
            <a href="#"><li>Регистрация</li></a>
          </ul>
        </div>
        <div className="footer__right">
          <a href="tel:+7 (499) 348 93 96">
          +7 (499) 348 93 96
          </a>
          <a href="#mail">info@ytyt.ru</a>
        </div>
      </div>
      <div className="reserved">
        <div className='reserved__left'>
        © 2024 Intele Travel — Все права защищены
        </div>
        <div className='reserved__right'>
        <p>
        Пользовательское соглашение
        </p>
        <p>
        Политика <br /> конфиденциальности
        </p>
        </div>
      </div>

    </footer>
  )
}
