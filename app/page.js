import Course from "@/components/shared/Course/Course";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Help from "@/components/shared/Help/Help";
import Main from "@/components/shared/Main/Main";
import Partners from "@/components/shared/Partners/Partners";
import Stages from "@/components/shared/Stages/Stages";
import Training from "@/components/shared/Training/Training";
import VideoContent from "@/components/shared/VideContent/VideoContent";
import Title from "@/components/ui/Title/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <Header/>
        <Main/> 
        <Course/>
        <Training/>
        <VideoContent/>
        <Stages/>
        <Help/>
        <Partners/>
        <Footer/> 
        
     </div>
    
  );
}
