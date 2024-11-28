'use client'
import Course from "@/components/shared/Course/Course";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Help from "@/components/shared/Help/Help";
import Instruction from "@/components/shared/Instruction/Instruction";
import Main from "@/components/shared/Main/Main";
import Modal from "@/components/shared/Modal/Modal";
import Partners from "@/components/shared/Partners/Partners";
import Stages from "@/components/shared/Stages/Stages";
import Training from "@/components/shared/Training/Training";
import VideoContent from "@/components/shared/VideContent/VideoContent";
import Title from "@/components/ui/Title/Title";
import { ModalCTX } from "@/context/ModalCTX";
import Image from "next/image";
import { createContext, useEffect, useState } from "react";

export default function Home() {
 
  const [modal, setModal] = useState(false)



  useEffect(()=>{
    if(modal){
      document.body.style.overflow  = 'hidden'
    }else{
      document.body.style.overflow  = ''
    }
  },[modal])
  return (

    <ModalCTX.Provider value={{modal, setModal}}>
 <div className="wrapper">
        <Modal/>
        <Main/> 
        <Course/>
        <Training/>
        <VideoContent/>
        <Stages/>
        <Help/>
        <Partners/>
        <Instruction/>
        <Footer/> 
        
     </div>
    </ModalCTX.Provider>
   
    
  );
}
