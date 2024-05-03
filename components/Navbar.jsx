import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../public/logo.png"
import SignInOut from './auth/SignInOut'


export default function Navbar() {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image src={Logo} alt="logo" className="object-cover h-[40px] w-full"  />
                </Link>

                <ul className="flex gap-4 text-sm text-gray-500">
                    <li className="py-2 active">
                        <a href="./index.html">Home</a>
                    </li>

                    <li className="py-2">
                        <a href="./index.html">Recipe</a>
                    </li>

                    <li className="py-2">
                        <Link href="/">About us</Link>
                    </li>

                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                        <SignInOut />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
