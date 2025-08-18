import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { FaLinkedinIn } from "react-icons/fa";

export default function FooterSocialLinkItem({name, href}: {name: string, href: string}) {

    const content = () => {
        switch(name){
            case "Facebook":
                return <FaFacebookF className='text-gray-400 group-hover:text-gray-200 transition-all ease-in-out duration-300' />
            case "Instagram":
                return <FaInstagram className='text-gray-400 group-hover:text-gray-200 transition-all ease-in-out duration-300' />
            case "Twitter":
                return <FaXTwitter className='text-gray-400 group-hover:text-gray-200 transition-all ease-in-out duration-300' />
            case "LinkedIn":
                return <FaLinkedinIn className='text-gray-400 group-hover:text-gray-200 transition-all ease-in-out duration-300' />
            default: 
                return null
        }
    }

    return (
        <Link href={href}>
            <li className='group border border-gray-400 hover:border-gray-200 rounded-full p-1 transition-all ease-in-out duration-300'>
                {content()}
            </li>
        </Link>
    )
}