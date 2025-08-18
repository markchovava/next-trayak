import React from 'react'
import BannerBgVideo from './BannerBgVideo'
import MainNavigation from './MainNavigation'
import Link from 'next/link'
import ButtonSecondary from './buttons/ButtonSecondary'
import { AboutData} from '../_data/sample/AboutData'



export default function MainHeader() {
  return (
    <>
    <header className="w-full relative lg:h-[100vh] h-[40rem] bg-black">
      <BannerBgVideo
        src="/assets/videos/slide.mp4"
        poster="/assets/img/slide.jpg" // Optional
      />
      <section className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-black to-transparent opacity-70"></section>
      <section className="absolute top-0 left-0 z-20 w-full h-full flex flex-col items-start justify-start">
        {/* NAVIGATION */}
        <MainNavigation />
        <div className="w-full flex-grow">
          <div className="mx-auto w-[92%] h-[100%] flex flex-col justify-center items-start">
            <h3 className="text-gray-200 leading-tight font-medium lg:text-[2.1rem] text-[1.8rem] lg:w-[60%] w-[65%] mb-6">
              {AboutData.intro}
            </h3>
           
              <Link href="/contact">
                <ButtonSecondary
                  title="Talk to us" 
                  css="py-3 px-5 rounded-full hover:drop-shadow-lg w-[10rem]" />
              </Link>
          </div>
        </div>
      </section>

      
    </header>
    </>
  )
}
