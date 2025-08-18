import Footer from '@/app/_components/Footer'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
import React from 'react'


export default function page() {
  return (
    <>
        <MainHeaderSecondary
            title='Guide'
            img='/assets/img/banner/03.jpg'
            intro="Download Guide." />

        <section className='w-full text-[2rem] h-[24rem] flex items-center justify-center'>
            Coming soon
        </section>


        <Footer />
    </>
  )
}
