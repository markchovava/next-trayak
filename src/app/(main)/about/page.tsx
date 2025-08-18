import FadeSlideIn from '@/app/_components/FadeSlideIn'
import Footer from '@/app/_components/Footer'
import GridLeftTwo from '@/app/_components/grid/GridLeftTwo'
import GridRightTwo from '@/app/_components/grid/GridRightTwo'
import { H1, H2, H2Black, H3 } from '@/app/_components/Headings'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
import { CeoData } from '@/app/_data/sample/CeoData'
import { ServicesData } from '@/app/_data/sample/ServicesData'
import React from 'react'

export default function page() {
  return (
    <div>
        <MainHeaderSecondary 
        title='About US'
        img='/assets/img/banner/01.jpg'
        intro="We are expert partner in Agriculture, Mining & Telecommunication." />

        <div className='h-[6rem] w-full' />

        <FadeSlideIn slideDirection="up" duration={1500}>
            <section className="pb-[6rem]">
            <div className="mx-auto w-[70%] flex flex-col gap-2">
                <H1 title="About Trayak Consultancy" />
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
            <GridLeftTwo title={ServicesData[4].title} desc={ServicesData[4].desc} />
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
                <H2 title="CEO of Trayak Consultancy (Pvt) Ltd" color="text-gray-200" />
            </div>
            <div className="h-[2rem]" />
            <FadeSlideIn slideDirection="right" duration={1500}>
                <section className='mx-auto w-[70%] text-xl font-light text-gray-900 '>
                    {CeoData.bio}
                </section>
            </FadeSlideIn>

        </section>




        <Footer />
    </div>
  )
}
