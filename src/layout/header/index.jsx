import React, { Fragment, memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import ShopIcon from '../../assets/icons/ShopIcon'
import UserIcon from '../../assets/icons/UserIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import BarsIcon from '../../assets/icons/BarsIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import logo from '../../assets/icons/logo.png'

const Header = () => {
    const navigate = useNavigate()

    return (
        <Fragment>
            <div className="max-w-[1920px] w-full hidden mx-auto relative h-[38px] lg:flex xl:flex flex-wrap items-center justify-center gap-1 bg-[#000] text-white">
                <div className='flex items-center gap-2'>
                    <span className='font-light'>Sign up and get 20% off to your first order.</span>
                    <button className='border-b-[1px]'>Sign Up Now</button>
                </div>
                <button className='px-1 py-.5 text-lg absolute right-[5%] rounded-sm'> <CloseOutlined className='font-bold' /> </button>
            </div>
            <header className='max-w-[1920px] sticky top-0 left-0 right-0 z-50 w-full mx-auto py-4 border-b-[1px] bg-white'>
                <nav className='max-w-[1272px] px-4 w-full mx-auto flex items-center justify-between'>
                    <Link to={'/'} className='w-[120px] h-[18px]'>
                        <img className='w-full h-full' src={logo} alt="" />
                    </Link>
                    <div className="md:flex hidden items-center justify-center gap-4">
                        <button onClick={() => navigate('/')}>Home</button>
                        <button onClick={() => navigate('/products')}>Products</button>
                        <button onClick={() => navigate('/brands')}>Brands</button>
                    </div>
                    <label htmlFor="search__label" className='w-[577px] hidden h-[36px] overflow-hidden ps-4 bg-gray-200 xl:flex items-center gap-2 rounded-[62px]'>
                        <SearchOutlined className='text-lg' />
                        <input className='w-full h-full px-4 text-emerald-lg bg-gray-200'
                            type="search" placeholder='Search for products...' />
                    </label>
                    <div className="md:flex hidden items-center justify-center gap-5">
                        <button onClick={() => navigate('/wish-list')} className='border-0'> <LikeIcon /> </button>
                        <button onClick={() => navigate('/cart')} className='border-0'> <ShopIcon /> </button>
                        <button onClick={() => navigate('/login')} className='border-0'> <UserIcon /> </button>
                    </div>
                    <div className="md:hidden flex items-center gap-5">
                        <button>
                            <SearchIcon />
                        </button>
                        <button>
                            <BarsIcon />
                        </button>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default memo(Header)