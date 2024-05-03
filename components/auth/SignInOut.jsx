"use client"
import { useAuth } from '@/app/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SignInOut() {
    const { auth ,setAuth} = useAuth()
    const router = useRouter()
    const logout = () => {
        setAuth(null)
        router.push('/login')
    }
    console.log(auth)
    return (
        <>
            {
                auth ? <span onClick={logout} className='cursor-pointer'>LogOut</span>
                    :
                    <Link href="/login">Login</Link>
            }


        </>
    )
}
