import ButtonSecondary from '@/app/_components/buttons/ButtonSecondary'
import Footer from '@/app/_components/Footer'
import TextArea from '@/app/_components/form-inputs/TextArea'
import TextInput from '@/app/_components/form-inputs/TextInput'
import { H2, H3, H4 } from '@/app/_components/Headings'
import FooterNavItem from '@/app/_components/links/FooterNavItem'
import MainHeaderSecondary from '@/app/_components/MainHeaderSecondary'
import { ContactData } from '@/app/_data/sample/ContactData'
import { FooterLinksData } from '@/app/_data/sample/NavData'
import React from 'react'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'



export default function page() {
  return (
    <>
    <MainHeaderSecondary 
        title='Contact Us'
        img='/assets/img/banner/04.jpg'
        intro="Talk to us, we would like to hear from you." />
    
    <div className='h-[7rem] w-full' />

    <section className='pb-[6rem]'>
        <div className='mx-auto w-[92%] grid lg:grid-cols-2 gap-8 grid-cols-1'>
            <div className='p-6'>
                <H4 title='Get in touch with our experienced consultants today!' />
                <div className='h-[1rem]' />
                <div className='flex flex-col gap-3 pt-6 pb-6'>
                    <div className='flex justify-start items-center gap-3'>
                    <span className='rounded-full'>
                        <FaPhone />
                    </span>
                    <span>{ContactData.phone}</span>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                    <span className='rounded-full'>
                        <FaLocationDot />
                    </span>
                    <span>{ContactData.address}</span>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                    <span className='rounded-full'>
                        <IoMdMail />
                    </span>
                    <span>{ContactData.email}</span>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-white drop-shadow rounded-2xl'>
                <H4 title='Contact Us' />
                <div className='h-[1rem]' />
                <TextInput label='Name' name="name" placeholder="Enter Name..."  />
                <TextInput label='Email' name="email" placeholder="Enter Email..."  />

                <TextArea label='Message' name="message" placeholder="Enter Message..." />

                <ButtonSecondary
                    title="Submit" 
                    css="w-full rounded-xl text-black py-4 w-[10rem]" />
                
            </div>
        </div>
    </section>
    
    <Footer />
    </>
  )
}
