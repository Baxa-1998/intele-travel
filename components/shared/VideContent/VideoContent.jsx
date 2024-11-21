import React from 'react';
import './videoContent.scss'
import Title from '@/components/ui/Title/Title';
import { MediaModal } from './VideoModal';
export default function VideoContent() {
  return (
    <section className='videoContent'>
      <Title>Как происходит обучение на Intele Travel?</Title>
      <p className='videoContentSubtitle'>
        Обучение должно быть комфортным. Поэтому мы разработали собственную <br /> систему для
        быстрого усваивания информации . На ней вы можете не только <br /> изучать теорию, но и
        запускать готовые примеры.
      </p>
      <div className='relative h-full'>
      <div className='grid grid-cols-2 gap-2 h-full'>
      
        <MediaModal
          videoSrc={
            'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4'
          }
        />
      </div>
    </div>
    </section>
  );
}
