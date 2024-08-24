import React, { memo } from 'react'
import EmailIcon from '../../assets/icons/EmailIcon'
import payme1 from '../../assets/images/payme-1.png'
import payme2 from '../../assets/images/payme-2.png'
import payme3 from '../../assets/images/payme-3.png'
import payme4 from '../../assets/images/payme-4.png'
import payme5 from '../../assets/images/payme-5.png'
import logo from '../../assets/icons/logo.png'
import { Link } from 'react-router-dom'
import TwitterIcon from '../../assets/icons/TwitterIcon'
import FacebookIcon from '../../assets/icons/FacebookIcon'
import InsagramIcon from '../../assets/icons/InsagramIcon'
import GitHubIcon from '../../assets/icons/GitHubIcon'

const Footer = () => {
    const classIcon = `w-[35px] h-[35px] flex items-center justify-center border-2 rounded-[50px] border-[#00000033]`

    return (
        <div className='w-full'>
            <div className='max-w-[1240px] w-full min-h-[180px] mx-auto px-[64px]
             flex items-center justify-between transform translate-y-[50%] rounded-[20px] bg-black'>
                <h4 className='max-w-[555px] w-full text-[40px] leading-[45px] font-extrabold text-white'>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h4>
                <div className="w-[350px] flex flex-wrap flex-col gap-3.5">
                    <label htmlFor="emails" className='max-w-[400px] w-full h-[48px] px-5 rounded-3xl flex items-center gap-3 bg-white'>
                        <span> <EmailIcon /> </span>
                        <input className='w-full h-[60%]' type="email" id='emails' placeholder="Enter your email address" />
                    </label>
                    <button className='max-w-[400px] w-full h-[48px] px-5 rounded-3xl text-center bg-white'>
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
            <footer className='max-w-[1920px] pt-[140px] w-full min-h-[500px] h-full mx-auto bg-[#F0F0F0]'>
                <div className="max-w-[1240px] w-full mx-auto flex flex-wrap items-start justify-between gap-4">
                    <ul className='w-[248px] h-[177px] flex flex-col gap-[25px]'>
                        <Link to={'/'} className='w-[120px] h-[18px]'> <img className='w-[167px] h-[23px] object-contain' src={logo} alt="" /> </Link>
                        <li className='text-[14px] leading-[22px] text-[#00000099]'>
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </li>
                        <li className='flex items-center justify-start gap-3'>
                            <button className={classIcon}>
                                <TwitterIcon className="text-gray-500" fill={'black'} />
                            </button>
                            <button className='w-[35px] h-[35px] flex items-center justify-center border-2 rounded-[50px] border-[#00000033]'>
                                <FacebookIcon className="text-gray-500" fill={'black'} />
                            </button>
                            <button className='w-[35px] h-[35px] flex items-center justify-center border-2 rounded-[50px] border-[#00000033]'>
                                <InsagramIcon className="text-gray-500" fill={'black'} />
                            </button>
                            <button className='w-[35px] h-[35px] flex items-center justify-center border-2 rounded-[50px] border-[#00000033]'>
                                <GitHubIcon className="text-gray-500" fill={'black'} />
                            </button>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-lg mb-2 font-semibold'>Company</li>
                        <li className='text-[#00000099]'>About</li>
                        <li className='text-[#00000099]'>Features</li>
                        <li className='text-[#00000099]'>Works</li>
                        <li className='text-[#00000099]'>Career</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-lg mb-2 font-semibold'>Help</li>
                        <li className='text-[#00000099]'>Customer Support</li>
                        <li className='text-[#00000099]'>Delivery Details</li>
                        <li className='text-[#00000099]'>Terms & Conditions</li>
                        <li className='text-[#00000099]'>Privacy Policy</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-lg mb-2 font-semibold'>FAQ</li>
                        <li className='text-[#00000099]'>Account</li>
                        <li className='text-[#00000099]'>Manage Deliveries</li>
                        <li className='text-[#00000099]'>Orders</li>
                        <li className='text-[#00000099]'>Payments</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-lg mb-2 font-semibold'>Resources</li>
                        <li className='text-[#00000099]'>Free eBooks</li>
                        <li className='text-[#00000099]'>Development Tutorial</li>
                        <li className='text-[#00000099]'>How to - Blog</li>
                        <li className='text-[#00000099]'>Youtube Playlist</li>
                    </ul>
                </div>
                <p className='max-w-[1240px] w-full mt-[50px] mb-[25px] h-[1px] mx-auto bg-[#0000001A]'></p>
                <div className="max-w-[1240px] w-full mx-auto flex flex-wrap items-center justify-between">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <figure className='flex mt-1.5'>
                        <img src={payme1} alt="" />
                        <img src={payme2} alt="" />
                        <img src={payme3} alt="" />
                        <img src={payme4} alt="" />
                        <img src={payme5} alt="" />
                    </figure>
                </div>
            </footer>
        </div>
    )
}

export default memo(Footer)