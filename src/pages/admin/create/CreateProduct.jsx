import React, { memo } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import { useGetCategoriesQuery } from '../../../context/api/categoryApi'
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const newFile = []

const initialState = { title: 'T-shirt', price: 15, oldPrice: 22, categoryId: '', units: 'dona', desc: '', photos: [] }
const CreateProduct = () => {
    const [newProduct, setNewProduct] = React.useState(initialState)
    const { data: caegoryData } = useGetCategoriesQuery()
    const [fileList, setFileList] = React.useState(newFile)
    const [previewOpen, setPreviewOpen] = React.useState(false);
    const [previewImage, setPreviewImage] = React.useState('');

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) { file.preview = await getBase64(file.originFileObj); }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button style={{ border: 0, background: 'none', }} type="button"> <PlusOutlined />
            <div style={{ marginTop: 8, }} > Upload </div>
        </button >
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newProduct)
    }

    return (
        <div>
            <h1 className='text-3xl font-bold'>Create Product</h1>
            <form onSubmit={handleSubmit} className="w-[500px] grid grid-cols-2 gap-4">
                <label htmlFor="title" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Title</span>
                    <input autoFocus value={newProduct.title} onChange={(e) => setNewProduct(p => ({ ...p, title: e.target.value }))} type="text" id="title"
                        placeholder='Title' className='w-full py-1 px-3 text-lg font-semibold border-2 rounded-md'
                    />
                </label>
                <label htmlFor="price" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Price</span>
                    <input value={newProduct.price} onChange={(e) => setNewProduct(p => ({ ...p, price: e.target.value }))}
                        type="number" id="price" placeholder='Price' className='w-full py-1 px-3 text-lg font-semibold border-2 rounded-md'
                    />
                </label>
                <label htmlFor="old-price" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Old price</span>
                    <input value={newProduct.oldPrice} onChange={(e) => setNewProduct(p => ({ ...p, oldPrice: e.target.value }))}
                        type="number" id="old-price" placeholder='Old price' className='w-full py-1 px-3 text-lg font-semibold border-2 rounded-md'
                    />
                </label>
                <label htmlFor="categories" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Categories</span>
                    <select name="categoryId" onChange={(e) => setNewProduct(p => ({ ...p, categoryId: e.target.value }))}
                        className='w-full py-1 px-3 text-lg font-semibold border-2 rounded-md'>
                        {
                            caegoryData?.payload?.map(category => (
                                <option value={category?.id} key={category?.id}>{category?.title}</option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="units" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Units</span>
                    <input value={newProduct.units} onChange={(e) => setNewProduct(p => ({ ...p, units: e.target.value }))} type="text" id="units"
                        placeholder='Units' className='w-full py-1 px-3 text-lg font-semibold border-2 rounded-md'
                    />
                </label>
                <label htmlFor="desc" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Description</span>
                    <input value={newProduct.desc} onChange={(e) => setNewProduct(p => ({ ...p, desc: e.target.value }))} type="text" id="desc"
                        placeholder='Description' className='w-full py-1 px-3 text-lg font-semibold border-2 rounded-md'
                    />
                </label>
                <label htmlFor="photos" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Photos</span>
                    <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange} >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    {previewImage && (
                        <Image wrapperStyle={{ display: 'none', }}
                            preview={{
                                visible: previewOpen, onVisibleChange: (visible) => setPreviewOpen(visible),
                                afterOpenChange: (visible) => !visible && setPreviewImage(''),
                            }}
                            src={previewImage}
                        />
                    )}
                </label>
                <label htmlFor="category-btn" className='w-[120px] grid gap-2'>
                    <span className='text-lg font-semibold'>Button</span>
                    <Button color='primary' type='submit' className='w-[120px] h-[38px] text-lg font-semibold bg-blue-500'>Create</Button>
                </label>
            </form>
        </div >
    )
}

export default memo(CreateProduct)