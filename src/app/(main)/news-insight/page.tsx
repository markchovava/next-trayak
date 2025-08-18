import ButtonSecondary from '@/app/_components/buttons/ButtonSecondary'
import Card1 from '@/app/_components/cards/Card1'
import FadeSlideIn from '@/app/_components/FadeSlideIn'
import Footer from '@/app/_components/Footer'
import GridLeftTwo from '@/app/_components/grid/GridLeftTwo'
import GridRightTwo from '@/app/_components/grid/GridRightTwo'
import GridThree2 from '@/app/_components/grid/GridThree2'
import { H1, H2, H2Black, H3 } from '@/app/_components/Headings'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
import React from 'react'

export default function page() {
  return (
    <div>
        <MainHeaderSecondary 
        title='About US'
        img='/assets/img/banner/03.jpg'
        intro="We are expert partner in Agriculture, Mining & Telecommunication." />

        <div className='h-[7rem] w-full' />

        <FadeSlideIn slideDirection="up" duration={1500}>
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
        </FadeSlideIn>


       <FadeSlideIn slideDirection="up" duration={1500}>
            <section>
            <div className="flex flex-col justify-center items-center">
                <H3 title="News" />
                <div className="h-[1.5rem]" />
                <H2Black title="Recent News & Insight" />
                <div className="h-[3rem]" />
                <GridThree2 />
                <div className="h-[2rem]" />
                <div className="flex items-center justify-center">
                    <ButtonSecondary
                    title="Load More" 
                    css="py-4 px-6 rounded-full hover:drop-shadow-lg w-[12rem]" />
                </div>
            </div>
            </section>
            <div className="h-[6rem]" />
        </FadeSlideIn>
       



        <Footer />
    </div>
  )
}
