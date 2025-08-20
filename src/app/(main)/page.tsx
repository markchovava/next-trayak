import About from "../_components/About";
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





export default function Home() {
  return (
    <>
    <MainHeader />
    <div className="h-[6rem]" />

    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="w-full">
        <div className="w-[92%] mx-auto pt-8 px-8 pb-10 rounded-2xl overflow-hidden bg-gray-950 text-gray-200">
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


    <About />


    <Footer />
    </>
  );
}
