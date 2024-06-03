import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import meta from '../assets/meta.svg'

const Header = () => {
    const NavigationArray = [
        {
            id: 1,
            link: "/",
            label: "Home",
        },
        {
            id: 2,
            link: "/blog",
            label: "Blog",
        },
        {
            id: 3,
            link: "/singlepost",
            label: "Single Post",
        },
        {
            id: 4,
            link: "/pages",
            label: "Pages",
        },
        {
            id: 5,
            link: "/contact",
            label: "Contact Us",
        },
        // {
        //     id: 6,
        //     link: "/profile",
        //     label: "Profile",
        // },
    ]
    return (
        <div className="bg-white sticky top-0 z-50 w-full px-5 py-4 flex items-center justify-between">

            <div>
                <img src={meta} className="meta logo" alt="Meta logo" />
            </div>

            <nav className='flex items-center space-x-6 text-zinc-700 ml-28'>
                {NavigationArray?.map((navigation) => (
                    <NavLink key={navigation.label}
                        to={`${navigation.link}`}
                        className={({ isActive }) => (isActive ? "text-orange-600" : "")}>
                        {navigation.label}
                    </NavLink>
                ))}
            </nav>
            <div className='border bg-neutral-200 rounded-md p-1'>
                <input
                    type="text"
                    className="bg-neutral-200 px-1 py-0.4 w-40 outline-none"
                    placeholder="Search"
                />
                <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-1" />
            </div>

            {/* bg-gray-700 text-white rounded-full py-2 px-4 w-64 focus:outline-none focus:ring focus:border-blue-300" */}

        </div>
    )
}

export default Header