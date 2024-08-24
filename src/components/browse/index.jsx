import React, { memo } from 'react'
import casual from '../../assets/images/casual.png'
import formal from '../../assets/images/formal.png'
import party from '../../assets/images/party.png'
import gym from '../../assets/images/gym.png'

const Browse = () => {

    return (
        <div className='max-w-[1240px] my-12 px-16 py-[70px] w-full mx-auto rounded-[40px] bg-[#F0F0F0]'>
            <h1 className='text-[48px] mb-12 text-center font-extrabold'>BROWSE BY DRESS STYLE</h1>
            <div className='max-w-[1111px] w-full flex flex-col gap-5'>
                <div className="w-full flex items-center justify-between gap-5">
                    <figure>
                        <p className='text-[36px] font-bold absolute z-10 translate-x-[36px] translate-y-[25px]'>
                            Casual
                        </p>
                        <img className='w-full h-[290px] relative' src={casual} alt="" />
                    </figure>
                    <figure>
                        <p className='text-[36px] font-bold absolute z-10 translate-x-[36px] translate-y-[25px]'>
                            Formal
                        </p>
                        <img className='w-full h-[290px] relative' src={formal} alt="" />
                    </figure>
                </div>
                <div className="w-full flex items-center justify-between gap-5">
                    <figure>
                        <p className='text-[36px] font-bold absolute z-10 translate-x-[36px] translate-y-[25px]'>
                            Party
                        </p>
                        <img className='w-full h-[290px] relative' src={party} alt="" />
                    </figure>
                    <figure>
                        <p className='text-[36px] font-bold absolute z-10 translate-x-[36px] translate-y-[25px]'>
                            Gym
                        </p>
                        <img className='w-full h-[290px] relative' src={gym} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default memo(Browse)