import AboutSect1 from "../_components/AboutSect1";
import Card2 from "../_components/cards/Card2";
import Card3 from "../_components/cards/Card3";
import Carousel1 from "../_components/carousels/Carousel1";
import FadeSlideIn from "../_components/FadeSlideIn";
import Footer from "../_components/Footer";
import GridLeftTwo from "../_components/grid/GridLeftTwo";
import GridRightTwo from "../_components/grid/GridRightTwo";
import { H1, H2, H2Black, H3 } from "../_components/Headings";
import SvgHandShake from "../_components/icons/SvgHandShake";
import SvgMap from "../_components/icons/SvgMap";

import SvgTarget from "../_components/icons/SvgTarget";
import Image1 from "../_components/images/Image1";
import MainHeader from "../_components/MainHeader";
import { AboutData } from "../_data/sample/AboutData";
import { CeoData } from "../_data/sample/CeoData";
import { ServicesData } from "../_data/sample/ServicesData";
import { WorksData } from "../_data/sample/WorksData";

export default function About() {
  return (
    <div>

    <>
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="up" duration={1500}>
            <section className="w-full">
              <div className="mx-auto w-[70%] flex flex-col gap-2 text-2xl">
                <H1 title="Welcome to Trayak Consultancy" />
                {AboutData.aboutUs}
              </div>
            </section>
          </FadeSlideIn>
    
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="left" duration={1500}>
              <GridLeftTwo 
                title={AboutData.commitment.title} 
                desc={AboutData.commitment.desc} 
                img={AboutData.commitment.img} />
          </FadeSlideIn>
    
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="up" duration={1500}>
            <section className="w-full">
              <div className="mx-auto w-[92%] grid md:grid-cols-3 grid-cols-1 gap-8">
                {AboutData.approach.map((i, key) => (
                  <Card3 key={key} icon={i.icon} title={i.title} desc={i.desc} />
                ))}
              </div>
            </section>
          </FadeSlideIn>
    
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="up" duration={1500}>
            <AboutSect1 />
          </FadeSlideIn>
    
           <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="up" duration={1500}>
            <section className="bg-gray-950 py-[6rem]">
              <div className="mx-auto w-[80%]">
                <Carousel1 title="" />
              </div>
            </section>
          </FadeSlideIn>
          
    
          {/* HEADING */}
          <div className="h-[6rem]" />
          <div className='flex flex-col justify-center items-center mb-4'>
              <H1 title="Trayak's sectoral coverage" />
          </div>
    
          <div className="h-[2rem]" />
          <FadeSlideIn slideDirection="right" duration={1500}>
              <GridRightTwo title={ServicesData[0].title} desc={ServicesData[0].desc} img={ServicesData[0].img} />
          </FadeSlideIn>
    
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="left" duration={1500}>
              <GridLeftTwo title={ServicesData[1].title} desc={ServicesData[1].desc} img={ServicesData[1].img} />
          </FadeSlideIn>
    
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="right" duration={1500}>
              <GridRightTwo title={ServicesData[2].title} desc={ServicesData[2].desc} img={ServicesData[2].img} />
          </FadeSlideIn>
    
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="left" duration={1500}>
              <GridLeftTwo title={ServicesData[3].title} desc={ServicesData[3].desc} img={ServicesData[3].img} />
          </FadeSlideIn>
    
          <div className="h-[6rem]" />
          <FadeSlideIn slideDirection="right" duration={1500}>
              <GridRightTwo title={ServicesData[4].title} desc={ServicesData[4].desc} img={ServicesData[4].img} />
          </FadeSlideIn>
          
        </>
        <div className="h-[6rem]" />
        <section className='w-full bg-gray-950 pb-[6rem]'>
          <div className='h-[6rem] w-full' />
          <div className='flex flex-col justify-center items-center'>
            <H3 title="Words from the CEO" />
              <div className="h-[1rem]" />
              <H1 title="CEO of Trayak Consultancy (Pvt) Ltd" />
          </div>
          <div className="h-[2rem]" />
          <FadeSlideIn slideDirection="right" duration={1500}>
              <section className='mx-auto w-[70%] text-xl font-light text-gray-200 '>
                  {CeoData.bio}
              </section>
          </FadeSlideIn>
        </section>
    
        <section className='w-full bg-gray-50 pb-[6rem]'>
            <div className='h-[6rem] w-full' />
            <div className='flex flex-col justify-center items-center'>
                <H1 title="A different worldview of a changing world." />
            </div>
            <div className="h-[2rem]" />
            <FadeSlideIn slideDirection="left" duration={1500}>
                <section className='mx-auto w-[70%] text-xl font-light text-gray-950 '>
                    {CeoData.worldView}
                </section>
            </FadeSlideIn>
    
        </section>
    

    </div>
  )
}
