import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav style={{ borderColor: '#161B22', backgroundColor: '#0D1117' }} className='flex-center fixed top-0 z-50 w-full border-b-2 py-7 text-white'>
            <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
                <Link href={"/"}>
                    <Image
                        src="/jsm-logo.svg"
                        alt='logo'
                        width={55}
                        height={40}
                    />
                </Link>
                <Image
                    alt='Hamburger menu'
                    width={30}
                    height={30}
                    className='block md:hidden'
                    src={'/hamburger-menu.svg'} />
                <ul className='flex gap-x-3 max-md:hidden md:gap-x-10'>
                    <li className='body-text text-gradient_blue-purple !font-bold'>
                        <Link
                            href={'https://jsmastery.pro/next13'}
                            target="_blank"
                        >
                            Next.js 13.4 Course
                        </Link>
                    </li>
                    <li className='body-text !font-bold'>
                        <Link
                            href={'https://jsmastery.pro/masterclass'}
                            target="_blank"
                        >
                            Masterclass
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar