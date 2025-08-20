import { JSX } from "react";
import { H2Black } from "../Headings";


export default function Card3({icon, title, desc}: {icon: JSX.Element, title: string, desc: string}) {
  return (
     <div className="w-full flex flex-col items-center justify-start gap-5 ">
        <div className="w-[7rem] h-[8rem]">
            {icon}
        </div>
        <H2Black title={title} />
        <p className="font-light text-xl text-center">
        {desc}
        </p>
    </div>
  )
}
