import React from 'react'
import { H1 } from '../Headings'

export default function GridRightTwo({title, desc}: {title: string, desc: string}) {
  return (
    <>
    <section className="w-full pb-[6rem]">
      <div className="mx-auto w-[92%] lg:h-[24rem] rounded-2xl overflow-hidden grid lg:grid-cols-2 grid-cols-1 bg-white drop-shadow-lg">
        <div className="h-full w-full bg-gray-400"></div>
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
