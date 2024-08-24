import React, { memo } from 'react'
import { useGetCategoriesQuery } from '../../../context/api/categoryApi'
import { Loading } from '../../../components/loader'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const ManageCategory = () => {
    const { data, isFetching } = useGetCategoriesQuery()
    console.log(data)

    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold'>Manage Category</h1>
            <ul className="w-[600px] mt-12 grid gap-3">
                {
                    isFetching ? <Loading /> : data?.payload?.map(category => (
                        <li key={category?.id} className='w-full px-1 py-1 text-xl font-semibold flex items-center justify-between border-b-2 border-gray-500'>
                            <span>{category?.title}</span>
                            <div className="flex items-center justify-end gap-3">
                                <Button color='primary' className='p-0 px-2 py-2 rounded-[5px] text-sm'> <EditOutlined /> </Button>
                                <Button color='primary' className='p-0 px-2 py-2 rounded-[5px] text-sm'> <DeleteOutlined /> </Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default memo(ManageCategory)