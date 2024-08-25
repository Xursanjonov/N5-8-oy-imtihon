import React, { Fragment, memo } from 'react'
import ShopIcon from '../../assets/icons/ShopIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import { ratingTotal } from '../../static/CustemsFuction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../context/slices/cartSlice'
import toggleHeart from '../../context/slices/wishListSlice'
import { EyeOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
// slider
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const aksiya = ((product?.oldPrice - product?.price) * 100) / product?.oldPrice
    const addToLike = () => { dispatch(toggleHeart(product)); console.log(product) }
    const addToCard = () => { dispatch(addToCart(product)); console.log(product) }
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(null); };
    const handleCancel = () => { setIsModalOpen(null); };

    return (
        <Fragment>
            <div className='group w-[295px] min-h-[480px] border-0 flex flex-col justify-start gap-4 bg-white' >
                <figure className='w-[295px] h-[298px] relative rounded-lg bg-white'>
                    <img className='w-full h-full p-3 mx-auto object-contain rounded-lg' alt="example" src={product?.urls[0]} />
                    <div className='w-full h-full top-0 absolute hidden group-hover:flex group-hover:top-2
                                items-center justify-center bg-[#0002] rounded-lg gap-3'>
                        <button className='w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white'>
                            <LikeIcon />
                        </button>
                        <button onClick={showModal} className='w-[34px] h-[34px] flex items-center justify-center px-3 rounded-full bg-white'>
                            <EyeOutlined className='text-[24px]' />
                        </button>
                        <button className='w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white'>
                            <ShopIcon />
                        </button>
                    </div>
                </figure>
                <div className="w-full flex px-3.5 flex-col gap-3">
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
                            {aksiya.brm()}%
                        </li>
                    </ul>
                </div>
            </div>
            {showModal ? <Modal title={product?.title + ' images'} style={{ width: '400px', height: '500px' }}
                open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Swiper loop={true} spaceBetween={10} navigation={true}
                    thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]}
                    style={{ width: '100%', height: '400px', margin: '10px auto' }}
                >
                    {product?.urls?.map(el => <SwiperSlide key={el}>
                        <img className='w-[350px] flex items-center justify-center mx-auto mx-h-[350px] object-contain' src={el} />
                    </SwiperSlide>)}
                </Swiper>
                <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4}
                    freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} // className="mySwiper"
                    style={{ width: '100%' }}
                >
                    {
                        product?.urls?.map(el => <SwiperSlide className='flex items-center justify-center'
                        style={{ width: '100%', height: '150px', objectFit: 'contain' }} key={el}>
                            <img className='w-[350px] flex items-center justify-center mx-auto  object-contain' src={el} />
                        </SwiperSlide>)
                    }
                </Swiper>
            </Modal> : <></>}
        </Fragment>
    )
}

export default memo(ProductItem)