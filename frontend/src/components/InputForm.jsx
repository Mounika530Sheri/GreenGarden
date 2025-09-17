import React, { useState } from 'react'
import Axios from 'axios'

export default function Form({ setIsOpen }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [sign, setSign] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("") // clear old errors
        let endpoint = sign ? "signUp" : "login"

        try {
            const res = await Axios.post(`http://localhost:5000/${endpoint}`, { email, password })
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setIsOpen(false) // close modal
        } catch (err) {
            console.error("Login/Signup error:", err.response?.data)
            setError(err.response?.data?.error || err.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        className="input" 
                        required 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className='form-control'>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        className="input" 
                        required 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <button type="submit">
                    {sign ? "SignUp" : "Login"}
                </button><br/>

                {error && <h6 className='error'>{error}</h6>}

                <p onClick={() => setSign(prev => !prev)}>
                    {sign ? "Already have an account" : "Create new account"}
                </p>
            </form>
        </>
    )
}
