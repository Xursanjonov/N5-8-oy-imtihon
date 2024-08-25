import React, { memo } from 'react'
import LikeIcon from '../../assets/icons/LikeIcon'
import ShopIcon from '../../assets/icons/ShopIcon'
import { Link } from 'react-router-dom'
import { ratingTotal } from '../../static/CustemsFuction'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHeart } from '../../context/slices/wishListSlice'
import LikeRedIcon from '../../assets/icons/LikeRedIcon'
import ShopBlackIcon from '../../assets/icons/ShopBlackIcon'
import { EyeOutlined } from '@ant-design/icons'
import { addToCart } from '../../context/slices/cartSlice'

const ProductsItem = ({ product }) => {
    const dispatch = useDispatch()
    const likeDaTa = useSelector(state => state.wishlist.value)
    const cartData = useSelector(state => state.cart.value)

    const addToLikeBtn = () => { dispatch(toggleHeart(product)) }
    const addToCartBtn = () => { dispatch(addToCart(product)) }

    return (
        <>
            <div className='group w-[270px] min-h-[370px] mx-auto flex flex-col justify-start gap-4 bg-white rounded-md' >
                <figure className='w-[255px] h-[298px] mx-auto relative rounded-lg bg-white'>
                    <img className='w-full h-full mx-auto p-3 object-contain rounded-lg' alt="example" src={product?.urls[0]} />
                    <div className='w-full h-full top-0 absolute hidden group-hover:flex group-hover:top-2
                                items-center justify-center bg-[#0002] rounded-lg gap-3'>
                        <button onClick={addToLikeBtn} className='w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white'>
                            {
                                likeDaTa?.some(el => el._id === product?._id) ? <LikeRedIcon /> : <LikeIcon />
                            }
                        </button>
                        <button className='w-[34px] h-[34px] flex items-center justify-center px-3 rounded-full bg-white'>
                            <EyeOutlined className='text-[24px]' />
                        </button>
                        <button onClick={addToCartBtn} disabled={product?.stock === product?.quantity || product?.quantity < 0} className='w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white'>
                            {cartData?.some(el => el._id === product?._id) ? <ShopBlackIcon /> : <ShopIcon />}
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
                        <li className={`text-[24px] font-medium text-[#00000066] ${product?.oldPrice < product?.price ? 'hidden' : 'block'}`}>
                            ${product?.oldPrice}
                        </li>
                        <li className={`${product?.oldPrice < product?.price ? 'hidden' : 'flex w-[58px] mt-1 h-[28px]'}
                    px-2 items-center justify-center font-semibold bg-[#FF33331A] text-[#FF3333] rounded-3xl`}>
                            {(((product?.oldPrice - product?.price) * 100) / product?.oldPrice).brm()}%
                        </li>
                    </ul>
                    <p className={`font-semibold text-md ${product?.quantity ?? 'hidden'}`}>Quantity: <span className='font-bold'>{product?.quantity}</span></p>
                </div>
            </div>
        </>
    )
}

export default memo(ProductsItem)