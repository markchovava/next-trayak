import React from 'react'

export default function BannerBgImage({img}: {img: string}) {
  return (
    <div 
        style={{backgroundImage: `url(${img})`}} 
        className={`w-full bg-fixed bg-cover bg-bottom h-full relative bg-gradient-to-br 
        from-blue-600 via-sky-700 to-blue-800  flex flex-col items-start justify-center`}>

    </div>
  )
}
