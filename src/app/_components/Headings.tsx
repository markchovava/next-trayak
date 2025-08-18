export function H1({title} : {title: string}) {
    return (
        <>
        <h1 className="px-4 text-[2.2rem] text-amber-500 font-medium leading-tight">
          {title}
        </h1>
        </>
    )
} 


export function H2({title, color=""} : {title: string, color: string}) {
    return (
        <>
        <h1 className={`px-4 text-[2rem] ${color} font-medium leading-tight`}>
          {title}
        </h1>
        </>
    )
} 

export function H2Black({title} : {title: string}) {
    return (
        <>
        <h1 className="px-4 text-[2rem] text-black font-bold leading-tight">
          {title}
        </h1>
        </>
    )
} 


export function H3({title} : {title: string}) {
    return (
        <>
        <h1 className="text-xl uppercase text-amber-500 font-medium leading-tight">
          {title}
        </h1>
        </>
    )
} 


export function H4({title} : {title: string}) {
    return (
        <>
        <h1 className="text-2xl text-amber-500 font-medium leading-tight">
          {title}
        </h1>
        </>
    )
} 