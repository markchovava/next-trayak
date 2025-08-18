import React from 'react'
import BannerBgVideo from './BannerBgVideo'
import MainNavigation from './MainNavigation'
import Link from 'next/link'
import BannerBgImage from './BannerBgImage'



export default function MainHeaderSecondary({title, intro, img}: {title:string, intro: string, img:string}) {
  return (
    <>
    <header className="w-full relative lg:h-[90vh] h-[30rem] overflow-hidden bg-black">
      <BannerBgImage img={img} />
      <section className="absolute top-0 left-0  w-full h-[100%] z-10 bg-gradient-to-br from-black to-transparent opacity-90" />
      <section className="absolute top-0 left-0 z-20 w-full h-full flex flex-col items-start justify-start">
        {/* NAVIGATION */}
        <MainNavigation />
        <div className="w-full flex-grow">
          <div className="mx-auto w-[92%] h-[100%] flex flex-col justify-center items-start">
            <h3 className="text-amber-400 uppercase font-serif leading-tight font-medium text-[1.5rem] mb-3">
              {title}
            </h3>
            <p className="text-gray-200 leading-tight font-medium text-[2.1rem] lg:w-[50%] w-[55%] mb-6">
                {intro}
            </p>            
          </div>
        </div>
      </section>

      
    </header>
    </>
  )
}
