"use client"

interface TextAreaProps {
    label: string;
    placeholder: string;
    name: string;
    handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    data: string;
}


export default function TextArea(
  {name, label, placeholder, handleInput, data}: TextAreaProps
) {
  return (
    
    <div className='mb-1'>
        <p className='font-light mb-1'>{label}:</p>
        <textarea 
        name={name}
        onChange={handleInput}
        value={data}
        placeholder={placeholder}
        className='h-[10rem] px-3 py-2 w-[100%] rounded-xl outline-none border border-gray-300'
        ></textarea>
    </div>
  )
}
