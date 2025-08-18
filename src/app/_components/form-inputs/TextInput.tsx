import React from 'react'



export default function TextInput(
    {name, label, placeholder,}: 
    {label: string, placeholder: string, name: string}
) {
      
    return (
        <div className='w-full mb-4'>
            <p className='font-light mb-1'>{label}:</p>
            <input 
                type='text'
                name={name} 
                placeholder={placeholder}
                className='outline-none border border-gray-300 rounded-xl w-[100%] px-3 py-2' />
        </div>
  )
}
