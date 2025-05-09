import { useState } from 'react'
import CustomInput from '../components/CustomInput'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, error, isPending } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }
    return (
        <form className='max-w-sm p-5 mx-auto my-16 fromTop rounded-2xl' onSubmit={handleSubmit}>
            <h2 className='flex justify-center items-center mx-auto my-0 text-xl font-medium uppercase tracking-wider'>Sign Up</h2>
            <div className=' mt-4 flex flex-col gap-4'>
                <CustomInput
                    htmlFor='username'
                    labelText='Username:'
                    inputType='text'
                    inputClassName='mb-1 relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#777] focus:outline-none '
                    labelCLassName='text-[#666666] inline-block'
                    placeholder='Enter username'
                    inputValue={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
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
            {!isPending && <button
                type="submit"
                className="text-[#053F05F0] border-green-700 border-2 mt-6 px-3 py-1 font-medium rounded-xl hover:scale-105 transition-all duration-100 ease-linear">
                Sign Up
            </button>}

            {isPending && <button
                type="submit"
                disabled
                className="text-[#053F05F0] border-green-700 border-2 mt-6 px-3 py-1 font-medium rounded-xl hover:scale-105 transition-all duration-100 ease-linear">
                loading........
            </button>}
            {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
        </form>
    )
}

export default Signup