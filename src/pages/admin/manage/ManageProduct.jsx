import React, { memo } from 'react'
import { useGetProductsQuery } from '../../../context/api/productApi'
import { Loading } from '../../../components/loader'
import { Button, Modal, Pagination } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const ManageProduct = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [limit, setLimit] = React.useState(12);
    const { data, isFetching } = useGetProductsQuery({ skip: currentPage, limit })
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const showModal = (product2) => { setIsModalOpen(product2); };
    const handleOk = () => { setIsModalOpen(null); };
    const handleCancel = () => { setIsModalOpen(null); };

    const handlePageChange = (page) => { setCurrentPage(page); }

    return (
        <div className='w-full mx-auto'>
            <h1 className='text-3xl font-bold'>Manage Product</h1>
            <div className="w-full mt-10 mx-auto flex flex-wrap items-center justify-start gap-4">
                {
                    isFetching ? <Loading key={'mange-product'} /> : data?.payload?.map(product => (
                        <>
                            <div key={product?.id} className='w-[277px] h-[350px] p-2 bg-white rounded-lg flex flex-col items-start justify-between'>
                                <figure className='w-[250px] mx-auto h-[250px] p-2 bg-white'>
                                    <img className='w-full h-full object-contain' src={product?.urls[0]} alt="" />
                                </figure>
                                <ul className='w-full px-3'>
                                    <li>{product?.title.split(' ').slice(0, 5).join(' ')}</li>
                                    <li>Price: {product?.price}</li>
                                    <div className="flex items-center justify-end gap-3">
                                        <Button key={'edit-btn'} className='p-0 px-1 py-2 rounded-[5px] text-sm'> <EditOutlined /> </Button>
                                        <Button onClick={() => showModal(product)} key={'delete-btn'} className='p-0 px-1 py-2 rounded-[5px] text-sm'> <DeleteOutlined /> </Button>
                                    </div>
                                </ul>
                            </div>
                            {
                                isModalOpen ? (<Modal title={isModalOpen?.title} className='bg-[#0005]'
                                    style={{ backgroundColor: '#0003' }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                    <p>Bu mahsulot rostan ham o`chirmoqchimis?</p>
                                </Modal>) : <></>
                            }
                        </>
                    ))
                }
            </div >
            <Pagination className='mt-10' align="center" current={currentPage} total={data?.total} onChange={handlePageChange} />
        </div>
    )
}

export default memo(ManageProduct)