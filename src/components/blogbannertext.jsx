import React from 'react'
import nopic from "../assets/nopic.svg"

const Blogbannertext = () => {
    return (
        <div>
            <div className='w-auto top-[420px] rounded-xl p-7 absolute ml-8 shadow-2xl'>
                <p className='bg-violet-900 rounded-md w-fit px-3 py-0.5 text-white font-medium'>Technology</p>

                <div className='w-[480px] text-2xl font-bold mt-3 text-white'>
                    <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                </div>

                <div className='flex items-center space-x-3 mt-4'>
                    <img src={nopic} alt="Image" className='h-6' />
                    <p className='text-sm text-gray-200'>Tracy Wilson</p>
                    <p className='text-sm text-gray-200'>August 20, 2023</p>
                </div>

            </div>
        </div>
    )
}

export default Blogbannertext