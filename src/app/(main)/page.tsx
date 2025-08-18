import ButtonSecondary from "../_components/buttons/ButtonSecondary";
import Carousel1 from "../_components/carousels/Carousel1";
import FadeSlideIn from "../_components/FadeSlideIn";
import Footer from "../_components/Footer";
import GridLeftTwo from "../_components/grid/GridLeftTwo";
import GridRightTwo from "../_components/grid/GridRightTwo";
import GridThree from "../_components/grid/GridThree";
import { H1, H2Black, H3 } from "../_components/Headings";
import MainHeader from "../_components/MainHeader";
import { ServicesData } from "../_data/sample/ServicesData";





export default function Home() {
  return (
    <>
    <MainHeader />
    <div className="h-[6rem]" />

    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="pb-[6rem]">
        <div className="mx-auto w-[70%] flex flex-col gap-2">
          <H1 title="Welcome to Trayak Consultancy" />
          <p className="font-light text-2xl ">
          Trayak Consultancy (Private) Limited is a private limited liability 
          company incorporated and based in Zimbabwe whose mission and vision are to
           drive business development, foster and facilitate key strategic business 
           networks and collaboration within the AfrAsian markets. The company’s mission is: -
          </p>
          <p className="px-[2rem] italic font-light text-2xl text-amber-600">
          “To help all our clients and stakeholders in creating brands and businesses that 
          can sustainably leverage on and maximumly utilise resources to best profit advantage 
          in a socially sensitive and beneficial manner.”
          </p>
        </div>
      </section>
    </FadeSlideIn>
    

     <FadeSlideIn slideDirection="right" duration={1500}>
      <GridRightTwo title={ServicesData[0].title} desc={ServicesData[0].desc} />
     </FadeSlideIn>

    <FadeSlideIn slideDirection="left" duration={1500}>
      <GridLeftTwo title={ServicesData[1].title} desc={ServicesData[1].desc} />
    </FadeSlideIn>

    <FadeSlideIn slideDirection="right" duration={1500}>
      <GridRightTwo title={ServicesData[2].title} desc={ServicesData[2].desc} />
    </FadeSlideIn>

    <FadeSlideIn slideDirection="left" duration={1500}>
      <GridLeftTwo title={ServicesData[3].title} desc={ServicesData[3].desc} />
    </FadeSlideIn>

    <FadeSlideIn slideDirection="right" duration={1500}>
      <GridRightTwo title={ServicesData[4].title} desc={ServicesData[4].desc} />
    </FadeSlideIn>


    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="bg-gray-900 pt-[6rem] pb-[6rem]">
        <div className="mx-auto w-[92%]">
          <Carousel1 title="Yesy" />
        </div>
      </section>
      <div className="h-[6rem]" />
    </FadeSlideIn>


    <FadeSlideIn slideDirection="up" duration={1500}>
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
    </FadeSlideIn>

   


    <Footer />
    </>
  );
}
