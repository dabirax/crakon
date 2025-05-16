import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }
    return (
        <form className=' max-w-sm p-6 mx-auto my-24 bg-[#effaf0] rounded-xl border shadow-lg fromTop' onSubmit={handleSubmit}>
            <h2 className='flex justify-center items-center mx-auto my-0 text-xl font-medium uppercase tracking-wider'>Login</h2>
            <div className=' mt-4 flex flex-col gap-4'>

                <CustomInput
                    htmlFor='email'
                    labelText='Email:'
                    inputType='email'
                    inputClassName='mb-1 relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#777] focus:outline-none '
                    labelCLassName='text-[#666666] inline-block'
                    placeholder='Enter user email'
                    inputValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CustomInput
                    htmlFor='password'
                    labelText='Password:'
                    inputType='password'
                    inputClassName='mb-1 relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#777] focus:outline-none'
                    labelCLassName='text-[#666666] inline-block'
                    placeholder='Enter user Password'
                    inputValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="text-[#053F05F0] border-green-700 border-2 mt-6 px-3 py-1 font-medium rounded-xl hover:scale-105 transition-all duration-100 ease-linear">
                Login
            </button>
        </form>
    )
}

//  ,
//  onChange,