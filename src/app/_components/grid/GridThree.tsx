import React from 'react'
import Card1 from '../cards/Card1'

const itemsData = [
    {id:1, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nesciunt!", date:"04August 2025", href:"#"},
    {id:1, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nesciunt!", date:"04August 2025", href:"#"},
    {id:1, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nesciunt!", date:"04August 2025", href:"#"},
]

export default function GridThree() {
  return (
    <section className=''>
        <div className='w-[92%] mx-auto grid md:grid-cols-3 grid-cols-1 gap-6'>
            { itemsData.map((i, key) => (
                <Card1 key={key} title={i.title} date={i.date} href={i.href} />
            ))}
        </div>
       
    </section>
  )
}
