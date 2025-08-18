import ButtonSecondary from "../_components/buttons/ButtonSecondary";
import Carousel1 from "../_components/carousels/Carousel1";
import FadeSlideIn from "../_components/FadeSlideIn";
import Footer from "../_components/Footer";
import GridLeftTwo from "../_components/grid/GridLeftTwo";
import GridRightTwo from "../_components/grid/GridRightTwo";
import GridThree from "../_components/grid/GridThree";
import { H1, H2, H2Black, H3 } from "../_components/Headings";
import MainHeader from "../_components/MainHeader";
import { CeoData } from "../_data/sample/CeoData";
import { ServicesData } from "../_data/sample/ServicesData";





export default function Home() {
  return (
    <>
    <MainHeader />
    <div className="h-[6rem]" />

    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="pb-[6rem]">
        <div className="mx-auto w-[70%] flex flex-col gap-2 text-2xl">
          <H1 title="Welcome to Trayak Consultancy" />
          <p className="font-light mb-4">
            Trayak Consultancy (Private) Limited is a private limited liability 
            company incorporated and based in Zimbabwe whose mission and vision are to
            drive business development, foster and facilitate key strategic business 
            networks and collaboration within the AfrAsian markets. The company’s mission is: -
          </p>
          <p className="mx-[2rem] px-4 italic font-light border-l-3 border-amber-500">
            “To help all our clients and stakeholders in creating brands and businesses that 
            can sustainably leverage on and maximumly utilise resources to best profit advantage 
            in a socially sensitive and beneficial manner.”
          </p>
        </div>
      </section>
    </FadeSlideIn>


    <FadeSlideIn slideDirection="right" duration={1500}>
        <GridRightTwo title={ServicesData[0].title} desc={ServicesData[0].desc} img={ServicesData[0].img} />
    </FadeSlideIn>

    <FadeSlideIn slideDirection="left" duration={1500}>
        <GridLeftTwo title={ServicesData[1].title} desc={ServicesData[1].desc} img={ServicesData[1].img} />
    </FadeSlideIn>

      <FadeSlideIn slideDirection="right" duration={1500}>
        <GridRightTwo title={ServicesData[2].title} desc={ServicesData[2].desc} img={ServicesData[2].img} />
    </FadeSlideIn>

    <FadeSlideIn slideDirection="left" duration={1500}>
        <GridLeftTwo title={ServicesData[3].title} desc={ServicesData[3].desc} img={ServicesData[3].img} />
    </FadeSlideIn>

    <FadeSlideIn slideDirection="right" duration={1500}>
        <GridRightTwo title={ServicesData[4].title} desc={ServicesData[4].desc} img={ServicesData[4].img} />
    </FadeSlideIn>


    <section className='w-full bg-gray-950 pb-[6rem]'>
      <div className='h-[6rem] w-full' />
      <div className='flex flex-col justify-center items-center'>
          <H3 title="About Swetang Sinha" />
          <div className="h-[1rem]" />
          <H2 title="CEO of Trayak Consultancy (Pvt) Ltd" color="text-gray-200" />
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
          <H3 title="About Swetang Sinha" />
          <div className="h-[1rem]" />
          <H2 title="A different worldview of a changing world." color="text-gray-900" />
      </div>
      <div className="h-[2rem]" />
      <FadeSlideIn slideDirection="left" duration={1500}>
          <section className='mx-auto w-[70%] text-xl font-light text-gray-900 '>
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
