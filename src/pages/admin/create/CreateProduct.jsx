import React, { memo, useState } from 'react';
import { Button, Upload, Image, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useGetCategoriesQuery } from '../../../context/api/categoryApi';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const initialState = {
    title: 'T-shirt',
    price: 15,
    oldPrice: 22,
    categoryId: '',
    units: 'dona',
    desc: '',
    photos: [],
};

const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState(initialState);
    const { data: caegoryData } = useGetCategoriesQuery();
    const [fileList, setFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in newProduct) {
            formData.append(key, newProduct[key]);
        }
        fileList.forEach((file) => {
            formData.append('photos', file.originFileObj);
        });

        // FormData ni backendga yuborish
        console.log(formData);
        // fetch yoki axios bilan yuborishingiz mumkin
    };

    const uploadButton = (
        <div className="flex flex-col items-center justify-center">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <div>
            <h1 className="text-3xl font-bold">Create Product</h1>
            <form onSubmit={handleSubmit} className="w-[700px] grid gap-4">
                <label htmlFor="title" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Title</span>
                    <input autoFocus value={newProduct.title} onChange={(e) => setNewProduct((p) => ({ ...p, title: e.target.value }))} type="text"
                        id="title" placeholder="Title" className="w-full py-1 px-3 text-lg font-semibold border-2 rounded-md"
                    />
                </label>

                <label htmlFor="price" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Price</span>
                    <input
                        value={newProduct.price}
                        onChange={(e) => setNewProduct((p) => ({ ...p, price: e.target.value }))}
                        type="number"
                        id="price"
                        placeholder="Price"
                        className="w-full py-1 px-3 text-lg font-semibold border-2 rounded-md"
                    />
                </label>

                <label htmlFor="categories" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Categories</span>
                    <select
                        name="categoryId"
                        onChange={(e) => setNewProduct((p) => ({ ...p, categoryId: e.target.value }))}
                        className="w-full py-1 px-3 text-lg font-semibold border-2 rounded-md"
                    >
                        {caegoryData?.payload?.map((category) => (
                            <option value={category?.id} key={category?.id}>
                                {category?.title}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="units" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Units</span>
                    <input
                        value={newProduct.units}
                        onChange={(e) => setNewProduct((p) => ({ ...p, units: e.target.value }))}
                        type="text"
                        id="units"
                        placeholder="Units"
                        className="w-full py-1 px-3 text-lg font-semibold border-2 rounded-md"
                    />
                </label>

                <label htmlFor="desc" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Description</span>
                    <input
                        value={newProduct.desc}
                        onChange={(e) => setNewProduct((p) => ({ ...p, desc: e.target.value }))}
                        type="text"
                        id="desc"
                        placeholder="Description"
                        className="w-full py-1 px-3 text-lg font-semibold border-2 rounded-md"
                    />
                </label>

                <label htmlFor="stock" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Stock</span>
                    <input
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct((p) => ({ ...p, stock: e.target.value }))}
                        type="number"
                        id="stock"
                        placeholder="Stock"
                        className="w-full py-1 px-3 text-lg font-semibold border-2 rounded-md"
                    />
                </label>

                <label htmlFor="old-price" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Old price</span>
                    <input
                        value={newProduct.oldPrice}
                        onChange={(e) => setNewProduct((p) => ({ ...p, oldPrice: e.target.value }))}
                        type="number"
                        id="old-price"
                        placeholder="Old price"
                        className="w-full py-1 px-3 text-lg font-semibold border-2 rounded-md"
                    />
                </label>

                <label htmlFor="photos" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Photos</span>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        beforeUpload={() => false} // Upload-ni oldindan yuklamaslik uchun
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal open={previewOpen} footer={null} onCancel={() => setPreviewOpen(false)}>
                        <Image alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </label>

                <label htmlFor="category-btn" className="w-full grid gap-2">
                    <span className="text-lg font-semibold">Button</span>
                    <Button
                        color="primary"
                        type="submit"
                        className="w-full h-[38px] text-lg font-semibold bg-blue-500"
                    >
                        Create
                    </Button>
                </label>
            </form>
        </div>
    );
};

export default memo(CreateProduct);
