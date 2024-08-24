import React, { memo } from 'react'
import heroBg from '../../assets/images/hero-bg.png'
import './hero.css'

const Hero = () => {

    return (
        <div className={`max-w-[1920px] w-full min-h-[800px] mx-auto relative`}>
            <img className='max-w-[1920px] w-full max-h-[800px] h-full absolute' src={heroBg} alt="" />
            <div className="max-w-[1240px] w-full mx-auto pt-8 transform translate-y-[20%] relative z-[1] flex flex-col items-start justify-start gap-8">
                <h1 className='max-w-[570px] w-full text-[64px] font-extrabold leading-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='lg:max-w-[760px] xl:max-w-[790px] w-full px-4 text-[22px] max-w-[358px]'>Browse through our diverse range of meticulously crafted garments, designed <br />
                    to bring out your individuality and cater to your sense of style.</p>
                <button className='w-[210px] h-[46px] text-lg rounded-3xl text-white bg-black'>Shop Now</button>
                <ul className='flex flex-wrap items-center justify-start gap-8'>
                    <li>
                        <h4 className='text-[40px] font-bold'>200+</h4>
                        <p className='text-sm'>International Brands</p>
                    </li>
                    <p className='w-[1px] h-[74px] bg-gray-400'></p>
                    <li>
                        <h4 className='text-[40px] font-bold'>2,000+</h4>
                        <p className='text-sm'>High-Quality Products</p>
                    </li>
                    <p className='w-[1px] h-[74px] bg-gray-400'></p>
                    <li>
                        <h4 className='text-[40px] font-bold'>30,000+</h4>
                        <p className='text-sm'>Happy Customers</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(Hero)