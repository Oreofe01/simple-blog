import React, { useState } from 'react'
import axios from 'axios';
import { baseauth } from '../constants';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [logingin, setLogingin] = useState(false)
    const [errormsg, setErrormsg] = useState("")

    // axios with credentials
    axios.defaults.withCredentials = true;

    const handleLogin = (e) => {
        e.preventDefault();

        setLogingin(true);


        axios.post(`${baseauth}/user/login`, {
            email,
            password,
        }).then((res) => {
            console.log("The login response =>", res);
            // clearing the form after registration
            setEmail("");
            setPassword("");
            window.location.assign("/");

            // after loging in push the user to the home page
            // navigate("/");
        }).catch((error) => {
            console.log("login error", error);
            // plating the error msg
            if (error instanceof axios.AxiosError) {
                console.log("login error from axios =>", error?.response?.data);
                setErrormsg(error?.response?.data?.message);
            }
        }).finally(() => setLogingin(false));
    };

    return (
        <div className='max-w-2xl mx-auto py-20'>
            <div className='bg-white drop-shadow-md p-5 w-full'>
                <h1 className='text-center text-2xl font-semibold mb-4'>Login Form</h1>

                <form onSubmit={handleLogin} className='space-y-3'>

                    {/* email field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            className="shadow border rounded w-full py-2 px-3 leading-tight text-gray-700 outline-none"
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                        />
                    </div>


                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            className="shadow border rounded w-full py-2 px-3 leading-tight text-gray-700 outline-none"
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your Password"
                        />
                    </div>

                    <div className='text-sm font-light text-red-400'>{errormsg}</div>
                    <div>
                        <button
                            className="bg-gray-300 hover:bg-gray-500 font-semibold py-2 px-4 rounded hover:text-white transition duration-300 disabled:cursor-not-allowed disabled:opacity-25"
                            type="submit"
                            disabled={logingin}>
                            Login
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default LoginForm