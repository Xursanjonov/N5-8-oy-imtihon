import React, { Fragment, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from 'antd'
// import ProductItem2 from '../product-wrapper/ProductsItem2'

const NoData = ({ products, star, end, title, link, btn }) => {
    const navigate = useNavigate()

    return (
        <Fragment>
            <div className='w-full my-16 mx-auto flex flex-col gap-14'>
                <h1 className='text-[48px] text-center font-extrabold'>{title}</h1>
                <div className="max-w-[1240px] w-full mx-auto flex flex-wrap items-center justify-start gap-5 bg-white">
                    {/* {products?.slice(star ?? 0, end ?? 4)?.map(product => <ProductItem2 key={product?.id} product={product} />)} */}
                    {products?.slice(star ?? 0, end ?? 4)?.map(product => (
                        <Skeleton active title={product?.title} className='w-[295px] min-h-[150px] p-8 border-[1px] rounded-lg' />
                    ))}
                </div>
                <button onClick={() => navigate(link ?? '/products')}
                    className={`w-48 ${btn ?? 'hidden'} px-4 py-2 mx-auto text-md font-semibold rounded-3xl border-[1px]`}>
                    View All
                </button>
            </div>
        </Fragment>
    )
}

export default memo(NoData)