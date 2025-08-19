import { JSX } from 'react'
import { H1 } from '../Headings'
import Image from 'next/image'

export default function GridRightTwo({title, desc, img}: {title: string, desc: string | JSX.Element, img: string}) {
  return (
    <>
    <section className="w-full">
      <div className="mx-auto w-[92%] lg:h-[24rem] rounded-2xl overflow-hidden grid lg:grid-cols-2 grid-cols-1 bg-white drop-shadow-lg">
        <div className="h-full w-full bg-gray-400 overflow-hidden">
          <Image 
            src={img} 
            width={800} 
            height={400} 
            alt="" 
            className="w-full h-full object-cover" />
        </div>
        <div className="h-full w-full flex flex-col items-start justify-center gap-3 px-6 py-8">
          <H1 title={title} />
          <p className="text-lg font-light">
            {desc}
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
