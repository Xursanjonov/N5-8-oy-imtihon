import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LikeCart from '../../components/like-cart'
import { Button, Empty, Typography } from 'antd';
import likeEmpty from '../../assets/images/like-empty.svg'

const WishList = () => {
    const [likeData, setLikeData] = useState(JSON.parse(localStorage.getItem('like__data')) || null)
    const navigate = useNavigate()

    useEffect(() => window.scrollTo(0, 0), [])
    useEffect(() => { localStorage.setItem('like__data', JSON.stringify(likeData)) }, [likeData])

    return likeData ? (
        <section className='max-w-[1240px] w-full mx-auto'>
            <div className='w-full my-16 mx-auto flex flex-col gap-14'>
                <h1 className='text-[48px] text-center font-extrabold'>Wish List</h1>
                <div className="max-w-[1240px] w-full mx-auto flex flex-wrap items-center justify-start gap-5 bg-white">
                    {
                        likeData?.map(el => <LikeCart key={el?.id} product={el} />)
                    }
                </div>
            </div>
        </section>
    ) : (
        <Empty image={likeEmpty}
            imageStyle={{
                maxWidth: '400px',
                width: '100%',
                height: '60vh',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            description={<Typography.Text className='text-lg'> Your wish list is empty</Typography.Text>}
        >
            <div className="flex items-center justify-center gap-4">
                <Button onClick={() => navigate('/')} className='font-semibold' type="">Go Home</Button>
                <Button onClick={() => navigate('/products')} className='font-semibold' type="primary">Go to Like Cart</Button>
            </div>
        </Empty>
    )
}

export default memo(WishList)