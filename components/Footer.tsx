import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex-between body-text w-full gap-y-10 border-t px-20 py-12 max-md:flex-col' style={{color: '#D0DFFF', backgroundColor: '#0D1117', borderColor: '#242C38'}}> 
        <p>Copyright © 2023 JS Mastery Pro | All rights Reserved</p>
        <div className='flex gap-x-9'>
            <Link href={"/terms-of-use"}>
                Terms & Conditions
            </Link>
            <Link href={"/privacy-policy"}>
                Privacy Policy
            </Link>
        </div>
    </footer>
  )
}

export default Footer