import React, { memo } from 'react'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const ProductsWrapper = ({ products, title, link, btn }) => {
    const navigate = useNavigate()

    return (
        <div className='w-full my-16 mx-auto flex flex-col gap-14'>
            <h1 className='text-[48px] text-center font-extrabold'>{title}</h1>
            <div className="max-w-[1240px] w-full mx-auto flex flex-wrap items-center justify-start gap-5 bg-white">
                {
                    products?.map(product => <ProductItem key={product?.id} product={product} />)
                }
            </div>
            <button onClick={() => navigate(link ?? '/products')}
                className={`w-48 ${btn ?? 'hidden'} px-4 py-2 mx-auto text-md font-semibold rounded-3xl border-[1px]`}>
                View All
            </button>
        </div>
    )
}

export default memo(ProductsWrapper)