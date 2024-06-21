import React from 'react';
import JasonImg from '../assets/JasonImg.svg';

const Profileinfo = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={JasonImg} alt="Img" />
                <span>John Doe</span>
                <span></span>
            </div>
            <p className='flex justify-center items-center'>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry. gaining a deep understanding of the impact technologyhas on our lives.</p>
        </div>
    )
}

export default Profileinfo