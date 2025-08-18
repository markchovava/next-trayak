export function H1({title} : {title: string}) {
    return (
        <>
        <h1 className="text-[2.2rem] text-amber-500 font-medium leading-tight">
          {title}
        </h1>
        </>
    )
} 


export function H2({title} : {title: string}) {
    return (
        <>
        <h1 className="text-[2rem] text-amber-500 font-medium leading-tight">
          {title}
        </h1>
        </>
    )
} 

export function H2Black({title} : {title: string}) {
    return (
        <>
        <h1 className="text-[2rem] uppercase text-black font-bold leading-tight">
          {title}
        </h1>
        </>
    )
} 


export function H3({title} : {title: string}) {
    return (
        <>
        <h1 className="text-xl text-amber-500 font-medium leading-tight">
          {title}
        </h1>
        </>
    )
} 