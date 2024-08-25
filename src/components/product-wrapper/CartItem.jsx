import { DeleteOutlined } from '@ant-design/icons'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decrementCart, removeFromCart } from '../../context/slices/cartSlice'

const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div className="w-full flex items-center py-4 border-b gap-4">
            <Link to={`/products/${product?._id}`} className="w-[124px] h-[124px] p-4 flex items-center bg-white border-2 rounded-lg">
                <img src={product?.urls[0]} alt={product?.title} className="w-[124px] h-[124px] object-contain rounded" />
            </Link>
            <div className="w-full flex items-start justify-between">
                <div className="h-[124px] ml-4 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold">{product?.title}</h3>
                        <p className="text-sm text-gray-500"><span className='text-black font-[500]'>Size:</span> Medium</p>
                        <p className="text-sm text-gray-500"><span className='text-black font-[500]'>Color:</span> Black</p>
                    </div>
                    <p className="text-[24px] font-bold">${product?.price}</p>
                </div>

                <div className="w-[225px] h-[124px] flex flex-col items-end justify-between">
                    <button onClick={() => dispatch(removeFromCart(product?._id))} className="text-red-500"> <DeleteOutlined className='text-lg' /> </button>
                    <div className="min-w-[124px] h-[36px] flex items-center justify-center rounded-[62px] text-[20px] bg-[#F0F0F0]">
                        <button onClick={() => product?.quantity <= 1 ? dispatch(removeFromCart(product?._id)) : dispatch(decrementCart(product))}
                            className="p-2 text-gray-600">-</button>
                        <span className="mx-2">{product?.quantity}</span>
                        <button onClick={() => dispatch(addToCart(product))} disabled={product?.quantity >= product?.stock} className="p-2 text-gray-600">+</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default memo(CartItem)