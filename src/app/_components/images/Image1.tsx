import Image from 'next/image'
import React from 'react'

export default function Image1({img}: {img: string}) {
  return (
    <div className="h-full w-full bg-gray-400 overflow-hidden">
    <Image 
        src={img} 
        width={800} 
        height={400} 
        alt="" 
        className="w-full h-full object-cover" />
    </div>
  )
}
