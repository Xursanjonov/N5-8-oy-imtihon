import React, { memo, useEffect } from 'react'
import ProductsWrapper from '../../components/product-wrapper'
import { PRODUCTS } from '../../static'
import { useNavigate, useParams } from 'react-router-dom'
import TabsWrapper from '../../components/tabs'
import image1 from '../../assets/images/one-life.png'
import { useGetProductsQuery } from '../../context/api/productApi'

const ProductDetailes = () => {
    const { id } = useParams()
    const { data } = useGetProductsQuery({ limit: 4, skip: 1 })

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(id)
    }, [])

    return (
        <div className='max-w-[1240px] w-full mx-auto'>
            <div className="w-full flex items-start gap-3.5">
                <figure className='w-[610px] my-9 flex gap-3.5'>
                    <div className="h-[530px] flex flex-col items-center justify-between gap-2">
                        <img className='w-[152px] h-[167px] rounded-[20px] bg-[#F0EEED]' src={image1} alt="" />
                        <img className='w-[152px] h-[167px] rounded-[20px] bg-[#F0EEED]' src={image1} alt="" />
                        <img className='w-[152px] h-[167px] rounded-[20px] bg-[#F0EEED]' src={image1} alt="" />
                    </div>
                    <img className='w-[444px] h-[530px] bg-[#F0EEED] rounded-[20px]' src={image1} alt="" />
                </figure>
            </div>
            <ul className='w-full flex flex-col gap-3'>
                <h4>All Reviews</h4>
            </ul>
            <TabsWrapper />
            <ProductsWrapper title={'You might also like'} star={8} end={12} products={data?.payload} />
        </div>
    )
}

export default memo(ProductDetailes)