"use client"



interface TextInputProps {
    label: string;
    placeholder: string;
    name: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    data: string;
}

export default function TextInput(
    {name, label, placeholder, handleInput, data}: TextInputProps
) {
      
    return (
        <div className='w-full mb-1'>
            <p className='font-light mb-1'>{label}:</p>
            <input 
                type='text'
                name={name} 
                onChange={handleInput}
                value={data}
                placeholder={placeholder}
                className='outline-none border border-gray-300 rounded-xl w-[100%] px-3 py-2' />
        </div>
  )
}
