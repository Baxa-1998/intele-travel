import Image from 'next/image';
import React from 'react';

const partners =[
  {
    id: 1,
    img: '/assets/partners/1.png',
    title: 'github'
  },
  {
    id: 2,
    img: '/assets/partners/2.png',
    title: 'github'
  },
  {
    id: 3,
    img: '/assets/partners/3.png',
    title: 'github'
  },
  {
    id: 4,
    img: '/assets/partners/4.png',
    title: 'github'
  },
  {
    id: 5,
    img: '/assets/partners/5.png',
    title: 'github'
  },
  {
    id: 6,
    img: '/assets/partners/6.png',
    title: 'github'
  },
  {
    id: 7,
    img: '/assets/partners/7.png',
    title: 'github'
  },
  {
    id: 8,
    img: '/assets/partners/8.png',
    title: 'github'
  },
  {
    id: 9,
    img: '/assets/partners/9.png',
    title: 'github'
  },
  {
    id: 10,
    img: '/assets/partners/10.png',
    title: 'github'
  },
]

const partners2 =[
  {
    id: 1,
    img: '/assets/partners/11.png',
    title: 'github'
  },
  {
    id: 2,
    img: '/assets/partners/12.png',
    title: 'github'
  },
  {
    id: 3,
    img: '/assets/partners/13.png',
    title: 'github'
  },
  {
    id: 4,
    img: '/assets/partners/14.png',
    title: 'github'
  },
  {
    id: 5,
    img: '/assets/partners/15.png',
    title: 'github'
  },
  {
    id: 6,
    img: '/assets/partners/16.png',
    title: 'github'
  },
  {
    id: 7,
    img: '/assets/partners/17.png',
    title: 'github'
  },
  {
    id: 8,
    img: '/assets/partners/18.png',
    title: 'github'
  },
  {
    id: 9,
    img: '/assets/partners/19.png',
    title: 'github'
  },
  {
    id: 10,
    img: '/assets/partners/20.png',
    title: 'github'
  },
]
function PartnersLogo() {
  
  return (
    <>
      <div className="w-full text-8xl pb-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {partners.map((item)=> (
            <li key={item.id}>
            <a
              target="_blank"
              href="#"
              className="bg-primary  text-primary-foreground text-2xl  sm:grid place-content-center  p-2   rounded-md">
              <Image src={item.img} width={100} height={100} alt={'partners'}/>
            </a>
          </li>
        ))}
        
      
        </ul>
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {partners2.map((item)=> (
            <li key={item.id}>
            <a
              target="_blank"
              href="#"
              className="bg-primary  text-primary-foreground text-2xl  sm:grid place-content-center  p-2   rounded-md">
              <Image src={item.img} width={100} height={100} alt={'partners'}/>
            </a>
          </li>
        ))}
        
      
        </ul>
      </div>
    </>
  );
}
export default PartnersLogo;