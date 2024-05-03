import { registerUser } from '@/app/actions'
import React from 'react'

export default function RegistrationForm() {
    return (
        <form className="login-form" action={registerUser}>
            <div>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required/>
            </div>

            <div>
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" required/>
            </div>
            <div>
                <label for="email">Email Address</label>
                <input type="email" name="email" id="email" required/>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required/>
            </div>

            <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Create Account</button>
        </form>
    )
}
