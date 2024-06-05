import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 w-3/4 mx-auto py-10'>
                <div>
                    <h2 className='font-bold text-base md:text-lg lg:text-xl'>About</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni animi
                        voluptatem! Modi unde deleniti neque, deserunt doloribus repudiandae obcaecati.</p>
                    <div>
                        <span className='font-bold text-sm'>Email:</span>
                        <span className='text-sm'> info@jstemplate.net</span>
                    </div>
                    <div>
                        <span className='font-bold text-sm'>Phone:</span>
                        <span className='text-sm'> 880 123 456 789</span>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 text-sm'>
                    <h2 className='font-bold text-base md:text-lg lg:text-xl'>Quick Link</h2>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/singlepost">Single Post</Link>
                    <Link to="/pages">Pages</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div className='flex flex-col space-y-2 text-sm'>
                    <h2 className='font-bold text-base md:text-lg lg:text-xl'>Category</h2>
                    <Link to="*">Lifestyle</Link>
                    <Link to="*">Technology</Link>
                    <Link to="*">Travel</Link>
                    <Link to="*">Business</Link>
                    <Link to="*">Economy</Link>
                    <Link to="*">Sports</Link>
                </div>

                <div>
                    <form className='flex flex-col items-center space-y-2 text-sm bg-white rounded p-5 w-[270px]' action=''>
                        <h2 className='font-bold text-base md:text-lg lg:text-xl'>Weekly Newsletter</h2>
                        <p>Get blog articles and offers via email</p>

                        <div className='border-2 rounded-md py-2 flex items-center w-full'>
                            <input
                                type="email"
                                className='outline-none'
                                placeholder='Your Email' />
                            <MdOutlineEmail className='text-gray-400 ml-auto' />
                        </div>


                        <button className='bg-blue-700 w-full py-2 rounded-md text-zinc-50 font-semibold px-24'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Footer