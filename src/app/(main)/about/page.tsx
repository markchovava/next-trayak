import About from '@/app/_components/About'
import AboutSect1 from '@/app/_components/AboutSect1'
import Card3 from '@/app/_components/cards/Card3'
import Carousel1 from '@/app/_components/carousels/Carousel1'
import FadeSlideIn from '@/app/_components/FadeSlideIn'
import Footer from '@/app/_components/Footer'
import GridLeftTwo from '@/app/_components/grid/GridLeftTwo'
import GridRightTwo from '@/app/_components/grid/GridRightTwo'
import { H1, H2, H2Black, H3 } from '@/app/_components/Headings'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
import { AboutData } from '@/app/_data/sample/AboutData'
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

        <About />
        
        
        <Footer />
    </div>
  )
}
