import Footer from '@/app/_components/Footer'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
import React from 'react'
import MediaList from './_components/MediaList'

export default function page() {
  return (
    <div>
        <MainHeaderSecondary
          title='Awards & Media'
          img='/assets/img/banner/02.jpg'
          intro="We are proud to share the accolades and recognition our work." />

          <MediaList />

        
    <Footer />


    </div>
  )
}
