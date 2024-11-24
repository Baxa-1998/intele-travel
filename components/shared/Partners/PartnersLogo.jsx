import Image from 'next/image';
import React from 'react';

const partners =[
  {
    id: 1,
    img: '/assets/partner1.png',
    title: 'github'
  },
  {
    id: 2,
    img: '/assets/partner1.png',
    title: 'github'
  },
  {
    id: 3,
    img: '/assets/partner1.png',
    title: 'github'
  },
  {
    id: 4,
    img: '/assets/partner1.png',
    title: 'github'
  },
  {
    id: 5,
    img: '/assets/partner1.png',
    title: 'github'
  },
  {
    id: 6,
    img: '/assets/partner1.png',
    title: 'github'
  },
  {
    id: 7,
    img: '/assets/partner1.png',
    title: 'github'
  },
  {
    id: 8,
    img: '/assets/partner1.png',
    title: 'github'
  },
]
function PartnersLogo() {
  
  return (
    <>
      <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {partners.map((item)=> (
            <li key={item.id}>
            <a
              target="_blank"
              href="https://www.youtube.com/naymurweb"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md">
              <Image src={item.img} width={60} height={60} alt={'partners'}/>
            </a>
          </li>
        ))}
        
      
        </ul>
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {partners.map((item)=> (
            <li key={item.id}>
            <a
              target="_blank"
              href="https://www.youtube.com/naymurweb"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md">
              <Image src={item.img} width={60} height={60} alt={'partners'}/>
            </a>
          </li>
        ))}
        
      
        </ul>
      </div>
    </>
  );
}
export default PartnersLogo;