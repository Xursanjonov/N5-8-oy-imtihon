import { Flex, Spin } from 'antd'
import React, { memo } from 'react'

export const Loading = () => {
    return (
        <Flex className='w-full my-12 flex flex-col gap-4 items-center justify-center'>
            <Spin color="primary" size="large" ></Spin>
            <span className='text-gray-500'>Loading...</span>
        </Flex>
    )
}
const Loader = () => {

    return (
        <Flex className='w-full h-screen flex flex-col gap-4 items-center justify-center'>
            <Spin color="primary" size="large" ></Spin>
            <span className='text-blue-500'>Loading...</span>
        </Flex>
    )
}

export default memo(Loader)