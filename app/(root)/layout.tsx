import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout