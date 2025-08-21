import Footer from '@/app/_components/Footer'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
import React from 'react'
import MediaList from './_components/MediaList'

export default function page() {
  return (
    <div>
        <MainHeaderSecondary
          title='Awards & Media'
          img='/assets/img/media/bg.jpg'
          intro="We are proud to share the accolades and recognition of our work." />

          <MediaList />

        
    <Footer />


    </div>
  )
}
