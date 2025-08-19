import { JSX } from "react";


export default function Card2({title, desc}: {title: JSX.Element; desc: string}) {
  return (
    <div className="flex flex-col items-center">
        <h5 className="text-[2.5rem] font-medium">
        {title}
        </h5>
        <p className="text-[1.5rem] font-light text-center text-amber-400">
        {desc}
        </p>
    </div>
  )
}
