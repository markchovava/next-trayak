import Link from "next/link";
import BannerBgVideo from "../_components/BannerBgVideo";
import MainNavItem from "../_components/links/MainNavItem";
import { NavLinksData } from "../_data/sample/NavData";
import Logo from "../_components/Logo";
import { LogoData } from "../_data/sample/LogoData";
import ButtonPrimary from "../_components/buttons/ButtonPrimary";
import ButtonSecondary from "../_components/buttons/ButtonSecondary";
import MainNavigation from "../_components/MainNavigation";





export default function Home() {
  return (
    <>
    <header className="w-full relative lg:h-[100vh] h-[30rem] bg-black">
      <BannerBgVideo
        src="/assets/videos/slide.mp4"
        poster="/assets/img/slide.jpg" // Optional
      />
      <section className="absolute w-full h-full z-10 bg-gradient-to-r from-black to-transparent opacity-70"></section>
      <section className="absolute top-0 left-0 z-20 w-full h-full flex flex-col items-start justify-start">
        {/* NAVIGATION */}
        <MainNavigation />
        <div className="w-full flex-grow">
          <div className="mx-auto w-[92%] h-[100%] flex flex-col justify-center items-start">
            <h3 className="text-gray-200 leading-tight font-medium text-[2.1rem] lg:w-[50%] w-[55%] mb-6">
              We are expert partner in Agriculture, Mining & Telecommunication.
            </h3>
            <Link href="">
              <Link href="#">
                <ButtonSecondary 
                  title="Talk to us" 
                  css="py-3 px-5 hover:drop-shadow-lg w-[10rem]" />
              </Link>
            </Link>
          </div>
        </div>
      </section>

      
    </header>
    </>
  );
}
