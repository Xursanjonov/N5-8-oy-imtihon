import React, { memo, useEffect } from 'react'
import { useGetProductsQuery } from '../../context/api/productApi'
import ShopIcon from '../../assets/icons/ShopIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import { Link } from 'react-router-dom'
import { Liner, ratingTotal } from '../../static/CustemsFuction'
import FiltersIcon from '../../assets/icons/FiltersIcon'
import { useGetCategoriesQuery } from '../../context/api/categoryApi'
import { Slider } from 'antd'
import { EyeOutlined } from '@ant-design/icons'

const Products = () => {
    const [tabs, setTabs] = React.useState('')
    const { data, isFetching } = useGetProductsQuery({ limit: '', filter: tabs })
    const { data: categoryData, isFetching: categoryFetching } = useGetCategoriesQuery()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [tabs])

    console.log(data?.payload)
    return (
        <section className='max-w-[1240px] w-full my-10 mx-auto flex items-start justify-start gap-[21px]'>
            <div className="max-w-[295px] min-h-[160px] w-full py-5 px-6 flex flex-wrap items-start justify-start border-2 rounded-[20px]">
                <button className='w-full text-[20px] font-bold flex items-center justify-between gap-2'>
                    <span>Filters</span> <FiltersIcon />
                </button>
                <Liner />
                <ul className='w-full grid gap-5 text-[#00000099] font-medium'>
                    {
                        categoryFetching ? (
                            <>
                                <li>Loading...</li>
                                <li>Loading...</li>
                                <li>Loading...</li>
                                <li>Loading...</li>
                                <li>Loading...</li>
                            </>
                        ) : categoryData?.payload?.map(category => (
                            <li key={category?._id} onClick={() => setTabs(category?.title)} className='cursor-pointer'> {category?.title} </li>
                        ))
                    }
                </ul>
                <Liner />
                <div className="w-full grid">
                    <h5 className='text-lg text-black font-semibold'>Price</h5>
                    <Slider className='w-full text-black' controlSize={20} range={{ draggableTrack: true, }} defaultValue={[0, 10000]} />
                </div>
                <Liner />
                <div className="w-full grid">
                    <h5 className='text-lg text-black font-semibold'>Colors</h5>
                    <ul className='w-[247px] mt-5 mx-auto flex flex-wrap items-start justify-between gap-[15.5px]'>
                        <li className='w-[35px] h-[35px] bg-[#00C12B] rounded-[50px] border-[2px] border-[#00C12B]'></li>
                        <li className='w-[35px] h-[35px] bg-[red] rounded-[50px] border-[2px] border-[red]'></li>
                        <li className='w-[35px] h-[35px] bg-[#F5DD06] rounded-[50px] border-[2px] border-[#F5DD06]'></li>
                        <li className='w-[35px] h-[35px] bg-[#F57906] rounded-[50px] border-[2px] border-[#F57906]'></li>
                        <li className='w-[35px] h-[35px] bg-[#06CAF5] rounded-[50px] border-[2px] border-[#06CAF5]'></li>
                        <li className='w-[35px] h-[35px] bg-[#063AF5] rounded-[50px] border-[2px] border-[#063AF5]'></li>
                        <li className='w-[35px] h-[35px] bg-[#7D06F5] rounded-[50px] border-[2px] border-[#7D06F5]'></li>
                        <li className='w-[35px] h-[35px] bg-[#F506A4] rounded-[50px] border-[2px] border-[#F506A4]'></li>
                        <li className='w-[35px] h-[35px] bg-[#FFFFFF] rounded-[50px] border-[2px] border-[#ddd]'></li>
                        <li className='w-[35px] h-[35px] bg-[black] rounded-[50px] border-[2px] border-[black]'></li>
                    </ul>
                </div>
                <Liner />
            </div>
            <div className="max-w-[945px] w-full px-4 grid gap-4">
                <h1 className='text-[32px] font-bold'>Casual</h1>
                <div className="w-full flex flex-wrap items-center justify-between gap-5">
                    {
                        isFetching ? <h1>Loading</h1> : data?.payload?.map(product => (
                            <div className='group w-[280px] min-h-[360px] flex flex-col justify-start gap-4
                        bg-white rounded-md' >
                                <figure className='w-[255px] h-[298px] mx-auto relative rounded-lg bg-white'>
                                    <img className='w-full h-full mx-auto p-3 object-contain rounded-lg' alt="example" src={product?.urls[0]} />

                                    <div className='w-full h-full top-0 absolute hidden group-hover:flex group-hover:top-2
                                items-center justify-center bg-[#0002] rounded-lg gap-3'>
                                        <button className='w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white'>
                                            <LikeIcon />
                                        </button>
                                        <button className='w-[34px] h-[34px] flex items-center justify-center px-3 rounded-full bg-white'>
                                            <EyeOutlined className='text-[24px]' />
                                        </button>
                                        <button className='w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white'>
                                            <ShopIcon />
                                        </button>
                                    </div>
                                </figure>
                                <div className="w-full px-4 pb-2 flex flex-col gap-3">
                                    <Link to={`/products/${product?._id}`} className='text-[20px] font-semibold'>{product?.title}</Link>
                                    <p className='flex items-center justify-start gap-4'>{ratingTotal(product?.rating)}
                                        <span className='text-sm text-gray-500'>{product?.rating}/5</span>
                                    </p>
                                    <ul className='flex items-center justify-start gap-3 text-black'>
                                        <li className='text-[24px] font-medium'>${product?.price}</li>
                                        <li className={`text-[24px] font-medium text-[#00000066] ${product?.oldPrice > 0 ? 'block' : 'hidden'}`}>
                                            ${product?.oldPrice}
                                        </li>
                                        <li className={`${product?.oldPrice > 0 ? 'flex w-[58px] mt-1 h-[28px]' : 'hidden'} px-2 items-center justify-center font-semibold
                                    bg-[#FF33331A] text-[#FF3333] rounded-3xl`}>
                                            {(((product?.oldPrice - product?.price) * 100) / product?.oldPrice).brm()}%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default memo(Products)