import React, { memo, useEffect } from 'react'
import { useGetProductsQuery } from '../../context/api/productApi'
import { Skeleton, Slider } from 'antd'
import { ColorsItem, Liner } from '../../static/CustemsFuction'
import FiltersIcon from '../../assets/icons/FiltersIcon'
import { useGetCategoriesQuery } from '../../context/api/categoryApi'
import ProductsItem from '../../components/product-wrapper/ProductsItem'

const Products = () => {
    const [categoryId, setCategoryId] = React.useState('')
    const { data, isFetching } = useGetProductsQuery({ limit: 6, categoryId })
    const { data: category, isFetching: categoryFetching } = useGetCategoriesQuery()

    useEffect(() => { window.scrollTo(0, 0) }, [categoryId])

    return (
        <section className='max-w-[1240px] w-full px-2 my-10 mx-auto grid md:grid-cols-4 items-start justify-start gap-[15px]'>
            <div className="max-w-[275px] hidden min-h-[160px] w-full py-4 px-3 md:flex flex-wrap col-span-1 items-start justify-start rounded-[10px]">
                <button className='w-full text-[20px] font-bold flex items-center justify-between gap-2'>
                    <span>Filters</span> <FiltersIcon />
                </button>
                <Liner key={'liner_1'} />
                <ul className='w-full grid gap-5 text-[#00000099] font-medium'>
                    {
                        categoryFetching ? <Skeleton active className='w-[247px] p-8 border-[1px] rounded-lg' />
                            : category?.payload?.map(category => (
                                <li key={category?._id} onClick={() => setCategoryId((category?._id).toString())} className='cursor-pointer'>
                                    {category?.title}
                                </li>
                            ))
                    }
                </ul>
                <Liner key={'liner_2'} />
                <div className="w-full grid pe-2">
                    <h5 className='text-lg text-black font-semibold'>Price</h5>
                    <Slider className='w-full text-black' controlSize={18} range={{ draggableTrack: true, }} defaultValue={[0, 10000]} />
                </div>
                <Liner key={'liner_3'} />
                <div className="w-full grid">
                    <h5 className='text-lg text-black font-semibold'>Colors</h5>
                    <ul className='max-w-[247px] w-full mt-5 mx-auto flex flex-wrap items-start justify-between gap-[15px]'>
                        <ColorsItem color={'#00C12B'} />
                        <ColorsItem color={'red'} />
                        <ColorsItem color={'#F5DD06'} />
                        <ColorsItem color={'#F57906'} />
                        <ColorsItem color={'#06CAF5'} />
                        <ColorsItem color={'#063AF5'} />
                        <ColorsItem color={'#7D06F5'} />
                        <ColorsItem color={'#F506A4'} />
                        <ColorsItem color={'#FFFFFF'} />
                        <ColorsItem color={'black'} />
                    </ul>
                </div>
                <Liner key={'liner_4'} />
            </div>
            <div className='w-full px-2 md:hidden mt-6 mb-4 text-[20px] lg:hidden xl:hidden mx-auto flex items-center justify-start gap-12'>
                <h4 className='font-bold'>Filters</h4>
                <select className="py-1 font-semibold px-3 text-black" onChange={e => setCategoryId(e.target.value)}>
                    {category?.payload?.map(category => (
                        <option value={category?._id} key={category?._id} className="text-black">
                            {category?.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="max-w-[929px] w-full mx-auto px-4 grid gap-4 col-span-3">
                <h1 className='text-[32px] font-bold'>Casual</h1>
                <div className="w-full flex flex-wrap items-center justify-between gap-5">
                    {
                        isFetching ? (
                            <>
                                <Skeleton active className='w-[280px] min-h-[150px] p-8 border-[1px] rounded-lg' />
                                <Skeleton active className='w-[280px] min-h-[150px] p-8 border-[1px] rounded-lg' />
                                <Skeleton active className='w-[280px] min-h-[150px] p-8 border-[1px] rounded-lg' />
                            </>
                        ) : data?.payload?.map(product => (
                            <ProductsItem key={product?._id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default memo(Products)