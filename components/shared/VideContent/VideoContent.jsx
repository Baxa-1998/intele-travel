'use client'
import React, { useRef } from 'react';
import './videoContent.scss'
import Title from '@/components/ui/Title/Title';
import { MediaModal } from './VideoModal';
import { TimelineContent } from '@/utils/timelineAnimation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default function VideoContent() {
  const videoContentRef = useRef(null)

  
  return (
    <section ref={videoContentRef} className='videoContent'>
  <TimelineContent animationNum={1} timelineRef={videoContentRef}>
  <Title>Как происходит обучение на Intele Travel?</Title>
  </TimelineContent>
     
  <TimelineContent animationNum={2} timelineRef={videoContentRef}>
  <p className='videoContentSubtitle'>
        Обучение должно быть комфортным. Поэтому мы разработали собственную <br /> систему для
        быстрого усваивания информации . На ней вы можете не только <br /> изучать теорию, но и
        запускать готовые примеры.
      </p>
  </TimelineContent>
      
      <div className='relative h-full'>
      <div className='grid grid-cols-2 gap-2 h-full'>
      
        <MediaModal
         
          videoSrc={
            '/assets/video.mp4'
          }
        />
      </div>
    </div>
    </section>
  );
}
