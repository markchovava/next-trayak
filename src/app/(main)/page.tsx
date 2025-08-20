import Card2 from "../_components/cards/Card2";
import Card3 from "../_components/cards/Card3";
import FadeSlideIn from "../_components/FadeSlideIn";
import Footer from "../_components/Footer";
import GridLeftTwo from "../_components/grid/GridLeftTwo";
import GridRightTwo from "../_components/grid/GridRightTwo";
import { H1, H2, H2Black, H3 } from "../_components/Headings";
import SvgHandShake from "../_components/icons/SvgHandShake";
import SvgMap from "../_components/icons/SvgMap";

import SvgTarget from "../_components/icons/SvgTarget";
import MainHeader from "../_components/MainHeader";
import { AboutData } from "../_data/sample/AboutData";
import { CeoData } from "../_data/sample/CeoData";
import { ServicesData } from "../_data/sample/ServicesData";
import { WorksData } from "../_data/sample/WorksData";





export default function Home() {
  return (
    <>
    <MainHeader />
    <div className="h-[6rem]" />

    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="w-full">
        <div className="w-[92%] mx-auto pt-8 px-8 pb-10 rounded-2xl overflow-hidden bg-black text-gray-200">
          <div className="flex items-center justify-center mb-3">
            <h5 className="text-[2.5rem] font-bold text-amber-400">
              {WorksData.title}
            </h5>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-8">            
            { WorksData.data.map((i, key) => (
              <Card2 
                key={key} 
                title={i.title} 
                desc={i.desc} />
            )) }
          </div>
        </div>
      </section>
    </FadeSlideIn>

  


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
          <div className="mx-auto w-[92%] grid grid-cols-3 gap-8">
            {AboutData.approach.map((i, key) => (
              <Card3 key={key} icon={i.icon} title={i.title} desc={i.desc} />
            ))}
          </div>
        </section>
      </FadeSlideIn>

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
          {/* <H3 title="About Swetang Sinha" />
          <div className="h-[1rem]" /> */}
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




   {/*  <FadeSlideIn slideDirection="right" duration={1500}>
      <GridRightTwo title={CompanyData.title} desc={CompanyData.desc} />
    </FadeSlideIn> */}


   {/*  <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="bg-black pt-[6rem] pb-[6rem]">
        <div className="mx-auto w-[92%]">
          <Carousel1 title="Trayak's sectoral coverage" />
        </div>
      </section>
      <div className="h-[6rem]" />
    </FadeSlideIn> */}

   {/*  <FadeSlideIn slideDirection="up" duration={1500}>
      <section>
        <div className="flex flex-col justify-center items-center">
          <H3 title="News" />
          <div className="h-[1rem]" />
          <H2Black title="Recent News & Insight" />
          <div className="h-[2rem]" />
          <GridThree />
          <div className="h-[2rem]" />
            <div className="flex items-center justify-center">
              <ButtonSecondary
                title="Read More News" 
                css="py-4 px-6 rounded-full hover:drop-shadow-lg w-[12rem]" />
            </div>
        </div>
      </section>
      <div className="h-[6rem]" />
    </FadeSlideIn> */}

   


    <Footer />
    </>
  );
}
