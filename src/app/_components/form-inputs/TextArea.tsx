import React from 'react'

export default function TextArea(
  {name, label, placeholder,}: 
    {label: string, placeholder: string, name: string}
) {
  return (
    
    <div className='mb-4'>
        <p className='font-light mb-1'>{label}:</p>
        <textarea 
        name={name}
        placeholder={placeholder}
        className='h-[10rem] px-3 py-2 w-[100%] rounded-xl outline-none border border-gray-300'
        ></textarea>
    </div>
  )
}
