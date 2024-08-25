import React, { memo, useEffect } from 'react'
import ProductsWrapper from '../../components/product-wrapper'
import { useNavigate, useParams } from 'react-router-dom'
import TabsWrapper from '../../components/tabs'
import image1 from '../../assets/images/one-life.png'
import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
import { Liner, ratingTotal } from '../../static/CustemsFuction'
import { Button } from 'antd'

const shooceSize = ["Small", "Medium", "Large", "X-Large"]

const ProductDetailes = () => {
    const { id } = useParams()
    const { data } = useGetProductsQuery({ limit: 4, skip: 1 })
    const { data: productData } = useGetProductByIdQuery(id)
    const [quantity, setQuantity] = React.useState(1);
    const [selectedColor, setSelectedColor] = React.useState("brown");
    const [selectedSize, setSelectedSize] = React.useState("Large");
    const [onChangeImg, setOnChangeImg] = React.useState(0);
    const product = productData?.payload
    const navigate = useNavigate()

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) =>
            prevQuantity + amount > 0 ? prevQuantity + amount : 1
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='max-w-[1240px] w-full mx-auto my-9'>
            <div className="w-full grid grid-cols-2 items-start justify-between gap-10">
                <div className="w-full flex items-start gap-3.5">
                    <figure className='w-[610px] flex gap-3.5'>
                        <div className="h-[530px] flex flex-col items-center justify-between gap-2">
                            {
                                product?.urls?.map((img, index) => (
                                    <img key={img} onClick={() => setOnChangeImg(index)}
                                        className={`w-[152px] h-[167px] p-2 object-contain rounded-[20px] border-2 
                                            ${index === onChangeImg ? 'border-gray-400' : 'border-[#F0EEED]'}`} src={img} alt="" />
                                ))
                            }
                        </div>
                        <img className='w-[444px] h-[530px] bg-[#fff] object-contain rounded-[20px]' src={product?.urls[onChangeImg]} alt="" />
                    </figure>
                </div>
                <ul className='w-full mx-auto flex flex-col gap-3'>
                    <div className="w-full">
                        <Button onClick={() => navigate(-1)} className='font-semibold'>Back</Button>
                        <h2 className="text-[40px] font-bold mb-2">{product?.title}</h2>
                        <div className="flex items-center mb-4">
                            <p>{ratingTotal(product?.rating)}</p>
                            <span className="ml-2 text-gray-500">{product?.rating}/5</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-3xl font-bold text-black">${product?.price}</span>
                            <div className={`flex items-center justify-start gap-2 ${product?.oldPrice < product?.price ? 'hidden' : 'block'}`}>
                                <span className="text-3xl font-bold px-3 py-[3px]  text-[#0000004D] ml-4">${product?.oldPrice}</span>
                                <span className="text-lg font-bold px-3 py-[3px] rounded-[62px] text-red-500 bg-[#FF33331A] ml-4">-40%</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4"> {product?.desc} </p>
                        <Liner />
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold mb-2">Select Colors</h3>
                            <div className="flex space-x-2">
                                <button className={`w-8 h-8 rounded-full bg-[#4F4631] ${selectedColor === "brown" ? "ring-2 ring-[red]" : ""}`}
                                    onClick={() => setSelectedColor("brown")}>
                                </button>
                                <button className={`w-8 h-8 rounded-full bg-[#314F4A] ${selectedColor === "green" ? "ring-2 ring-[red]" : ""}`}
                                    onClick={() => setSelectedColor("green")}>
                                </button>
                                <button className={`w-8 h-8 rounded-full bg-[#31344F] ${selectedColor === "blue" ? "ring-2 ring-[red]" : ""}`}
                                    onClick={() => setSelectedColor("blue")} >
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold mb-2">Choose Size</h3>
                            <div className="flex space-x-2">
                                {shooceSize.map((size) => (
                                    <button key={size} onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-lg ${selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-gray-600"}`} >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 text-2xl font-bold text-gray-500" > - </button>
                            <span className="text-xl">{quantity}</span>
                            <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 text-2xl font-bold text-gray-500" > + </button>
                        </div>
                        <button className="w-full px-4 py-2 bg-black text-white text-center rounded-lg"> Add to Cart </button>
                    </div>
                </ul>
            </div >
            <TabsWrapper />
            <ProductsWrapper title={'You might also like'} star={8} end={12} products={data?.payload} />
        </div >
    )
}

export default memo(ProductDetailes)