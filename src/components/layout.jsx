import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const Layout = () => {
    return (
        <div>
            <div className='w-3/4 mx-auto'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>

    )
}

export default Layout