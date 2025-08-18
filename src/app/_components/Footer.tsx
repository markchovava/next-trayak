import React from 'react'
import Logo from './Logo'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';
import { FooterLinksData, SocialLinksData } from '../_data/sample/NavData';
import FooterNavItem from './links/FooterNavItem';
import { ContactData } from '../_data/sample/ContactData';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterSocialLinkItem from './links/FooterSocialLinkItem';
import ButtonSecondary from './buttons/ButtonSecondary';



export default function Footer() {
  return (
    <>
    <footer className='relative bg-black text-gray-200 w-full h-auto pt-[8rem] pb-[5rem]'>

        <section className='w-[92%] mx-auto mb-[3rem] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
          <div className='md:col-span-2'>
            <Logo name='Trayak' href='/' />
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
          <div className='col-span-1'>
              <h3 className='text-[1.6rem] mb-4'>Site Links</h3>
              <ul className='flex flex-col gap-2 font-light'>
                {FooterLinksData.map((i, key) => (
                  <FooterNavItem key={key} dbData={i} />
                ))}
              </ul>
          </div>
          <div className='col-span-1'>
            <h3 className='text-[1.6rem] mb-4'>Social Media</h3>
            <ul className='flex items-center gap-2 justify-start pt-4 pb-6'>
              {SocialLinksData.map((i, key) => (
                <FooterSocialLinkItem key={key} name={i.name} href={i.href} />
              ))}
            </ul>
            <h3 className='text-[1.4rem]'>Newsletter</h3>
            <div className='mt-2 mb-4'>
              <p className='mb-2 font-light'>Email:</p>
              <input type="text" className="w-full rounded-xl px-2 py-3 outline-none border border-gray-600" />
            </div>
            <div> 
              <ButtonSecondary
                title="Submit" 
                css="w-full rounded-xl text-black py-3 hover:drop-shadow-lg w-[10rem]" />
            </div>
          </div>
        </section>

        <section className='mx-auto w-[92%] border-t border-gray-900 pt-3 flex lg:flex-row flex-col items-center justify-between gap-8'>
            <div className='flex items-center justify-start gap-3 text-sm text-gray-400'>
                <Link href='#' className='hover:text-gray-50 hover:underline ease-in-out transition-all duration-300'>
                    Sitemap
                </Link> |
                <Link href='#' className='hover:text-gray-50 hover:underline ease-in-out transition-all duration-300'>
                    Terms of Service
                </Link> |
                <Link href='#' className='hover:text-gray-50 hover:underline ease-in-out transition-all duration-300'>
                    Cookie Policy
                </Link>
            </div>

            <div className='text-sm text-gray-400 flex items-center lg:flex-row flex-col gap-2'>
                <p className=''>
                    &copy; {new Date().getFullYear()} Sikelela Mining Group. All rights reserved.
                </p>
                <p className='italic'>
                    Developed & maintained by <Link href='#' className='text-blue-500'>FL Designers</Link>
                </p>
            </div>
        </section>

    </footer>
    </>
  )
}
