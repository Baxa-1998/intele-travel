import React from 'react'
import './drawer.scss'
import close from '../../../public/assets/close.png'
import Image from 'next/image'
export default function Drawer({burger, setBurger}) {

  
  return (
    <div className={`drawer ${burger ? 'overlay-active' : ''}`}>
      <div className={`drawer__item ${burger ? 'drawer__item-active' : ''}`}>
        <div className='flex w-full justify-end'>
        <Image onClick={()=> setBurger(false)} className='cursor-pointer' src={close} alt='close'/>
        </div>
        <ul className='flex flex-col gap-2'>
          <li className='font-custom text-[#22253B] font-normal'><a href="#">Чему вы научитесь</a></li>
          <li className='font-custom'><a href="#">Онлайн платформа</a></li>
          {/* <li className='font-custom'><a href="#">Стоимость</a></li> */}
          <li className='font-custom'><a href="#">Контакты</a></li>
          <li className='font-custom'><a href="#">Регистрация</a></li>
        </ul>
        
      </div>
    </div>
  )
}
