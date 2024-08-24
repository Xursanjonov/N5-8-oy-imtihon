import React, { memo } from 'react'
import SuccessIcon from '../../assets/icons/SuccessIcon'
import { ratingTotal } from '../../static/CustemsFuction'

const CommentItem = ({ comment }) => {
    return (
        <ul className='w-[400px] h-[250px] p-8 flex flex-col gap-3 shadow-md border-[1px] rounded-[20px]'>
            <li>{ratingTotal(comment?.rating)} </li>
            <li className='flex items-center text-[20px] font-bold gap-1'>
                {`${comment?.fname} ${comment?.lname}.`} <SuccessIcon />
            </li>
            <li className='max-w-[336px] w-full text-[15.5px] text-[#00000099]'>
                {comment?.text}
            </li>
        </ul>
    )
}

export default memo(CommentItem)