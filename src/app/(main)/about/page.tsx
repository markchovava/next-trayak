import FadeSlideIn from '@/app/_components/FadeSlideIn'
import Footer from '@/app/_components/Footer'
import GridLeftTwo from '@/app/_components/grid/GridLeftTwo'
import GridRightTwo from '@/app/_components/grid/GridRightTwo'
import { H1, H2, H2Black, H3 } from '@/app/_components/Headings'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
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
                <H1 title="Lorem ipsum dolor sit amet." />
                <p className="font-light text-2xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet a minus quae mollitia, 
                laborum autem reiciendis eaque quisquam itaque nulla dolor minima soluta deserunt veritatis voluptas 
                accusamus, quidem illo.
                </p>

                <p className="font-light text-2xl ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet a minus quae mollitia, 
                    laborum autem reiciendis eaque quisquam itaque nulla dolor minima soluta deserunt veritatis voluptas 
                    accusamus, quidem illo.
                </p>
            </div>
            </section>
        </FadeSlideIn>


        <FadeSlideIn slideDirection="right" duration={1500}>
            <GridRightTwo />
        </FadeSlideIn>

        <FadeSlideIn slideDirection="left" duration={1500}>
            <GridLeftTwo />
        </FadeSlideIn>

         <FadeSlideIn slideDirection="right" duration={1500}>
            <GridRightTwo />
        </FadeSlideIn>

        <FadeSlideIn slideDirection="left" duration={1500}>
            <GridLeftTwo />
        </FadeSlideIn>

        <section className='bg-gray-950'>
            <div className='h-[6rem] w-full' />
            <div className='flex flex-col justify-center items-center'>
                <H3 title="News" />
                <div className="h-[1rem]" />
                <H2 title="Recent News & Insight" color="text-gray-200" />
            </div>
            <div className="h-[3rem]" />
            <FadeSlideIn slideDirection="right" duration={1500}>
                <GridRightTwo />
            </FadeSlideIn>

            <FadeSlideIn slideDirection="left" duration={1500}>
                <GridLeftTwo />
            </FadeSlideIn>
        </section>



        <Footer />
    </div>
  )
}
