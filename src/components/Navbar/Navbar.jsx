import React from 'react'
import LogoImg from '../../assets/logo.png'

const Navbar = () => {
    return <>
        <header className='w-full h-[12vh] px-30 shadow-lg'>
            <nav className='w-full h-full flex items-center justify-between'>
                {/* Logo */}
                <img src={LogoImg} alt="" className='w-[200px] cursor-pointer' />

                {/* Navigation Links */}
                <ul className='flex gap-8 text-lg mr-5'>
                    <li className='hover:text-[#054dfc] transition-colors'><a href="">Home</a></li>
                    <li className='hover:text-[#054dfc] transition-colors'><a href="">Browse skills</a></li>
                    <li className='hover:text-[#054dfc] transition-colors'><a href="">How it works?</a></li>
                    <li className='hover:text-[#054dfc] transition-colors'><a href="">About</a></li>
                </ul>

                {/* Profile and Score */}
                
            </nav>
        </header>
    </>
}

export default Navbar