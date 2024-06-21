import React, { useState } from 'react';
import axios from 'axios';
import { baseauth } from '../constants';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();

    // creating the states for the form
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [regisetring, setRegistering] = useState(false)
    const [errormsg, setErrormsg] = useState("")

    // registration route - http://localhost:9000/user/create

    // handle registration form
    const handleRegistration = (e) => {
        e.preventDefault();
        // const regDetails = {
        //     name,
        //     email,
        //     bio,
        //     password,
        //     confirmPassword,
        // }
        // console.log("The Details =>", regDetails);


        // the regiser main function
        setRegistering(true);

        // check if passwords match
        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            setRegistering(false);
            return;
        }
        // linking to the server
        axios.post(`${baseauth}/user/create`, {
            name,
            bio,
            email,
            password,
        }).then((res) => {
            console.log("The register response =>", res);
            // clearing the form after registration
            setName("")
            setBio("")
            setPassword("")
            setConfirmPassword("")
            // after registering push the user to the login page
            navigate("/login");
        }).catch((error) => {
            console.log("Register error", error);
            // plating the error msg
            if (error instanceof axios.AxiosError) {
                console.log("Register error from axios =>", error?.response?.data);
                setErrormsg(error?.response?.data?.message);
            }
        }).finally(() => setRegistering(false));
    };

    return (
        <div className='max-w-2xl mx-auto py-20'>
            <div className='bg-white drop-shadow-md p-5 w-full'>
                <h1 className='text-center text-2xl font-semibold mb-4'>Registration Form</h1>

                <form onSubmit={handleRegistration} className='space-y-3'>
                    {/* name field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            className="shadow border rounded w-full py-2 px-3 leading-tight text-gray-700 outline-none"
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                        />
                    </div>

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

                    {/* Bio */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Bio</label>
                        <input
                            className="shadow border rounded w-full py-2 px-3 leading-tight text-gray-700 outline-none"
                            type="text"
                            value={bio}
                            required
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Your Bio"
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

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                        <input
                            className="shadow border rounded w-full py-2 px-3 leading-tight text-gray-700 outline-none"
                            type="password"
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Comfirm Password"
                        />
                    </div>

                    <div className='text-sm font-light text-red-400'>{errormsg}</div>
                    <div>
                        <button
                            className="bg-gray-300 hover:bg-gray-500 font-semibold py-2 px-4 rounded hover:text-white transition duration-300 disabled:cursor-not-allowed disabled:opacity-25"
                            type="submit"
                            disabled={regisetring}>
                            Register
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default RegisterForm