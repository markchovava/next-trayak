import React from 'react'
import { H2, H2Black, H3 } from './Headings'
import Image1 from './images/Image1'

export default function AboutSect1() {
  return (
    <section className="w-full">
        <div className="w-[92%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="pb-8">
            <H3 title="Why Africa?" />
            <div className='h-4' />
            <H2Black title="Opportunities in Africa" />
            <p className="font-light text-xl my-4"> Africa is the fastest-growing region in the world.</p>
            <p className="font-light text-xl mb-4">
                The most significant barrier to doing business in Africa is perception. 
                With a population of over 1 billion people, growing middle class and several 
                development interventions to reduce poverty on the continent, there is no reason 
                for companies to exclude the continent in their globalisation strategies.
            </p>
            <div className="grid grid-cols-2">
            <div className="">
                <H2 title="5 out of 10" color="text-amber-500 mb-4" />
                <p className="text-xl font-light">
                Most progressed countries exist in Africa.
                </p>
            </div>
            <div className="">
                <H2 title="1/3" color="text-amber-500 mb-4" />
                <p className="text-xl font-light">
                Of all reforms recorded globally were in Sub-Saharan Africa.
                </p>
            </div>
            </div>
        </div>
        <div className="bg-gray-300 rounded-2xl overflow-hidden drop-shadow">
            <Image1 img="/assets/img/07.jpg" />
        </div>
        </div>
    </section>
  )
}
