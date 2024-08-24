import { Button, Result } from 'antd'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <Result className='w-full translate-y-[30%] flex flex-col items-center justify-center'
            status="404" title="404" subTitle="Sorry, the page you visited does not exist."
            extra={<div className='flex gap-4 items-center justify-center'>
                <Button onClick={() => navigate(-1)} >Go Back</Button>
                <Button onClick={() => navigate('/')} type="primary">Go Home</Button>
            </div>}
        />
    )
}

export default memo(NotFound)