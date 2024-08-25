import React from 'react'
import { Rate } from 'antd'

export const ratingTotal = React.FC = (rate) => <Rate allowHalf className='text-[18.5px]' defaultValue={rate} />

export const Liner = () => <p className='w-full h-[1px] my-4 bg-[#0000001A]'></p>

export const ColorsItem = ({ color }) => (
    <li className={`w-[35px] h-[35px] bg-[${color ?? 'white'}] rounded-[50px] border-[2px] border-[${color ?? 'white'}]`}></li>
)