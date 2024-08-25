import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Empty, Typography } from 'antd';
import likeEmpty from '../../assets/images/like-empty.svg'
import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from '../../components/product-wrapper/ProductsItem';
import { CloseOutlined } from '@ant-design/icons';
import { deleteAll } from '../../context/slices/wishListSlice';

const WishList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const likeData = useSelector(state => state.wishlist.value)

    // console.log(likeData)
    useEffect(() => window.scrollTo(0, 0), [likeData])

    return likeData.length ? (
        <section className='max-w-[1240px] w-full my-12 mx-auto'>
            <div className='w-full flex items-center justify-center gap-6'>
                <h1 className='text-[48px] text-center font-extrabold'>Wish List</h1>
                <button onClick={() => dispatch(deleteAll())} className='w-[34px] h-[34px] mt-2 p-1 flex items-center justify-center gap-2 font-bold rounded-md'>
                    <CloseOutlined className='text-xl' />
                </button>
            </div>
            <div className="max-w-[1240px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-center justify-start gap-4 bg-white">
                {
                    likeData?.map(el => (
                        <ProductsItem key={el._id} product={el} />
                    ))
                }
            </div>
        </section>
    ) : (
        <Empty image={likeEmpty}
            imageStyle={{
                maxWidth: '300px',
                width: '100%',
                height: '350px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            description={<Typography.Text className='text-lg'> Your wish list is empty</Typography.Text>}
        >
            <div className="flex items-center justify-center gap-4">
                <Button onClick={() => navigate('/')} className='font-semibold' type="">Home</Button>
                <Button onClick={() => navigate('/products')} className='font-semibold' type="primary">Start Shopping</Button>
            </div>
        </Empty>
    )
}

export default memo(WishList)