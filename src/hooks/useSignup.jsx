import { useState } from "react"
import { projectAuth } from "../firebase/Config"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            // sign up user
            const res = await createUserWithEmailAndPassword(projectAuth, email, password)
            console.log(res.user)

            if (!res) {
                throw new Error('Could not complete user signup')
            }
            // updates profile
            await updateProfile(res.user, { displayName })
            setIsPending(false)
            setError(null)
        } catch {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }

    return { error, isPending, signup }
}