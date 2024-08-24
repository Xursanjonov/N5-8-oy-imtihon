import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const MainLayout = () => {

    return (
        <div className='w-full'>
            <Header />
            <main> <Outlet /> </main>
            <Footer />
        </div>
    )
}

export default memo(MainLayout)