import ButtonSecondary from "../_components/buttons/ButtonSecondary";
import Carousel1 from "../_components/carousels/Carousel1";
import Footer from "../_components/Footer";
import GridLeftTwo from "../_components/grid/GridLeftTwo";
import GridRightTwo from "../_components/grid/GridRightTwo";
import GridThree from "../_components/grid/GridThree";
import { H1, H2Black, H3 } from "../_components/Headings";
import MainHeader from "../_components/MainHeader";





export default function Home() {
  return (
    <>
    <MainHeader />
    <div className="h-[6rem]" />
    
    <section className="pb-[6rem]">
      <div className="mx-auto w-[70%] flex flex-col gap-2">
        <H1 title="Lorem ipsum dolor sit amet." />
        <p className="font-light text-2xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet a minus quae mollitia, 
        laborum autem reiciendis eaque quisquam itaque nulla dolor minima soluta deserunt veritatis voluptas 
        accusamus, quidem illo.
        </p>
      </div>
    </section>

    <GridRightTwo />

    <GridLeftTwo />

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
              title="Talk to us" 
              css="py-4 px-6 rounded-full hover:drop-shadow-lg w-[12rem]" />
          </div>
      </div>
    </section>
    <div className="h-[6rem]" />

    <section className="bg-gray-900 pt-[6rem] pb-[6rem]">
      <div className="mx-auto w-[92%]">
        <Carousel1 title="Yesy" />
      </div>
    </section>


    <Footer />
    </>
  );
}
