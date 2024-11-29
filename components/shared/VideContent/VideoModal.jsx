'use client';
import React, { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { XIcon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const transition = {
  type: 'spring',
  duration: 0.4,
};
export function MediaModal({ imgSrc, videoSrc, className }) {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '#videoModal',
      { opacity: 0, scaleX: 1.3, scaleY: 1.2 },
      {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#videoModal',
          start: 'top 80%',
        },
      },
    );
  }, []);

  const uniqueId = useId();
  useEffect(() => {
    if (isMediaModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMediaModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMediaModalOpen]);
  return (
    <>
      <MotionConfig transition={transition}>
        <>
          <motion.div
            id="videoModal"
            className="w-full ml-[50%] mt-[50px] flex relative  flex-col overflow-hidden border   dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950"
            layoutId={`dialog-${uniqueId}`}
            style={{
              borderRadius: '12px',
            }}
            onClick={() => {
              setIsMediaModalOpen(true);
            }}>
            {videoSrc && (
              <motion.div layoutId={`dialog-video-${uniqueId}`} className="w-full">
                <video autoPlay muted loop className="h-full w-full object-cover  rounded-sm">
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </motion.div>
        </>
        <AnimatePresence initial={false} mode="sync">
          {isMediaModalOpen && (
            <>
              <motion.div
                key={`backdrop-${uniqueId}`}
                className="fixed inset-0 h-full w-full dark:bg-black/25 bg-white/95 backdrop-blur-sm "
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => {
                  setIsMediaModalOpen(false);
                }}
              />
              <motion.div
                key="dialog"
                className="pointer-events-none fixed inset-0 flex items-center justify-center z-50">
                <motion.div
                  className="pointer-events-auto relative flex flex-col overflow-hidden   dark:bg-gray-950 bg-gray-200 border w-[80%] h-[90%]"
                  layoutId={`dialog-${uniqueId}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: '24px',
                  }}>
                  {imgSrc && (
                    <motion.div layoutId={`dialog-img-${uniqueId}`} className="w-full h-full">
                      <img src={imgSrc} alt="" className="h-full w-full object-cover" />
                    </motion.div>
                  )}
                  {videoSrc && (
                    <motion.div layoutId={`dialog-video-${uniqueId}`} className="w-full h-full">
                      <video
                        autoPlay
                        muted
                        loop
                        controls
                        className="h-full w-full  object-containt rounded-sm md:object-cover">
                        <source src={videoSrc} type="video/mp4" />
                      </video>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setIsMediaModalOpen(false)}
                    className="absolute right-6 top-6 p-3 text-zinc-50 cursor-pointer dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800"
                    type="button"
                    aria-label="Close dialog">
                    <XIcon size={24} />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}
