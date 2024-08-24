import React, { memo } from 'react'
import { useGetProductsQuery } from '../../../context/api/productApi'
import { Loading } from '../../../components/loader'

const ManageProduct = () => {
    const { data, isFetching } = useGetProductsQuery({ skip: 1, limit: 10 })
    console.log(data?.payload)

    return (
        <div className='w-full mx-auto'>
            <h1 className='text-3xl font-bold'>Manage Product</h1>
            <div className="w-full mt-10 mx-auto flex flex-wrap items-center justify-start gap-4">
                {
                    isFetching ? <Loading /> : data?.payload?.map(product => (
                        <div key={product?.id} className='w-[277px] h-[350px] p-2 bg-white rounded-lg flex flex-col items-start justify-between'>
                            <figure className='w-[250px] mx-auto h-[250px] p-2 bg-white'>
                                <img className='w-full h-full object-contain' src={product?.urls[0]} alt="" />
                            </figure>
                            <ul className='w-full px-3'>
                                <li>{product?.title.split(' ').slice(0, 5).join(' ')}</li>
                                <li>Price: {product?.price}</li>
                                <div className="flex items-center justify-end gap-4">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(ManageProduct)