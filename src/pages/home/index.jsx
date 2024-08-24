import React, { memo } from 'react'
import Hero from '../../components/hero'
import ProductWrapper from '../../components/product-wrapper'
import CommentWrapper from '../../components/comment-wrapper'
import { useGetProductsQuery } from '../../context/api/productApi'
import { PRODUCTS } from '../../static'
import NoData from '../../components/no-data'
import Browse from '../../components/browse'
import img1 from '../../assets/images/versace.png'
import img2 from '../../assets/images/zara.png'
import img3 from '../../assets/images/gucci.png'
import img4 from '../../assets/images/prada.png'
import img5 from '../../assets/images/klein.png'

const Home = () => {
    const { data, isFetching } = useGetProductsQuery({ limit: 4, skip: 1 })
    const { data: data2, isFetching: isFetching2 } = useGetProductsQuery({ limit: 4, skip: 2 })

    console.log(data2)
    return (
        <section className='w-full mx-auto'>
            <Hero />
            <div className='max-w-[1920px] w-full mx-auto bg-black'>
                <div className="max-w-[1240px] mx-auto h-[122px] flex items-center justify-between">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
            {
                !isFetching ? <ProductWrapper btn={true} title="NEW ARRIVALS" products={data?.payload} /> : (
                    <NoData key={'new-arrivales'} btn={true} title="NEW ARRIVALS" products={PRODUCTS} />
                )
            }
            <p className='max-w-[1240px] w-full mx-auto h-[2px] bg-[#0000001A]'></p>
            {
                !isFetching2 ? <ProductWrapper btn={true} title="TOP SELLING" products={data2?.payload} /> : (
                    <NoData key={'top-selling'} btn={true} star={4} end={8} title="TOP SELLING" products={PRODUCTS} />
                )
            }
            <Browse />
            <CommentWrapper />
        </section>
    )
}

export default memo(Home)