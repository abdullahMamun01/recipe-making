'use client'

import { performLogin } from '@/app/actions'
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LoginForm() {
    const router  = useRouter()
    const {setAuth} = useAuth()
    const onSubmit =  async (e) => {
        e.preventDefault()
        
        try {
            const formData = new FormData(e.currentTarget)
            const user  = await performLogin(formData)
            if(user){
                router.push('/')
                setAuth(user)
                console.log(user)
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>

            <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Login</button>
        </form>
    )
}
