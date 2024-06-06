import React from 'react'
import banner from '../assets/banner.svg'

const BannerSide = () => {
    return (
        <div className='w-[1000px] mx-auto relative'>
            <img src={banner} alt="Meta banner" />
        </div>
    )
}

export default BannerSide