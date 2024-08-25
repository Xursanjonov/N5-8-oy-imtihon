import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Empty, Modal, Typography } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import CartItem from '../../components/product-wrapper/CartItem'
import { deleteAllCart } from '../../context/slices/cartSlice'
import cartEmpty from '../../assets/images/cart-empty.png'
import { Liner } from '../../static/CustemsFuction'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    const cartDatas = useSelector(state => state.cart.value)
    const showModal = () => { setOpen(true); };
    const handleOk = () => { localStorage.removeItem("cart-products"); setOpen(false); navigate("/products") };
    const handleCancel = () => { setOpen(false); };

    return cartDatas?.length ? (
        <section className='max-w-[1224px] w-full my-12 px-4 mx-auto grid grid-cols-1 gap-6'>
            <div className='w-full mx-auto flex items-center justify-between gap-6'>
                <h1 className='text-3xl font-bold'>YOUR CART</h1>
                <button onClick={() => dispatch(deleteAllCart())} className='p-1 mt-1 gap-2 flex items-center justify-center rounded-md'>
                    <span>Clear all</span>
                    <CloseOutlined className='text-lg' />
                </button>
            </div>
            <div className="w-full flex items-start justify-start gap-5">
                <div className="max-w-[715px] px-6 py-5 w-full flex flex-col rounded-[20px] border-2">
                    {
                        cartDatas?.map(item => (
                            <CartItem key={item?._id} product={item} />
                        ))
                    }
                </div>
                <div className="max-w-[505px] w-full p-4 h-[458px] flex flex-col items-start justify-between bg-white rounded-[20px] border-2">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <div className="w-full flex flex-col items-start gap-5 text-[#00000099]">
                        <div className="w-full flex justify-between text-lg">
                            <span>Subtotal</span>
                            <span className='font-semibold text-black'>$565</span>
                        </div>
                        <div className="w-full flex justify-between text-lg">
                            <span>Discount (-20%)</span>
                            <span className='font-semibold text-[red]'>-$113</span>
                        </div>
                        <div className="w-full flex justify-between text-lg">
                            <span>Delivery Fee</span>
                            <span className='font-semibold text-black'>$15</span>
                        </div>
                        <Liner key={'orders'} />
                        <div className="w-full flex justify-between text-2xl">
                            <span>Total</span>
                            <span className='font-semibold text-black'>${467}</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between gap-3">
                        <input
                            type="text"
                            placeholder="Add promo code"
                            className="w-full px-4 py-2 border rounded-[62px] mb-2"
                        />
                        <button className="w-[119px] bg-black text-white p-2 rounded-[62px]">Apply</button>
                    </div>
                    <button onClick={showModal} className="w-full bg-black text-white px-6 py-5 rounded-[62px] flex justify-center items-center">
                        Go to Checkout →
                    </button>
                </div>
            </div>
            {
                open ? <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
                    <p>Mahsulotlar ro`yxati omborga jo`natildi </p>
                    <p> Mahsulotlar tayyor bo`lganida sizga xabar jo`natiladi</p>
                </Modal> : <></>
            }
        </section>
    ) : (
        <Empty image={cartEmpty}
            className='w-full flex flex-col items-center justify-center'
            imageStyle={{
                maxWidth: '350px',
                width: '100%',
                height: '350px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            description={<Typography.Text className='text-lg'> Your Cart is empty</Typography.Text>}
        >
            <div className="flex items-center justify-center gap-4">
                <Button onClick={() => navigate('/')} className='font-semibold' type="">Home</Button>
                <Button onClick={() => navigate('/products')} className='font-semibold' type="primary">Start Shopping</Button>
            </div>
        </Empty>
    )
}

export default memo(Cart)