import { Button, Empty, Typography } from 'antd'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import cartEmpty from '../../assets/images/cart-empty.png'

const Cart = () => {
    const [cartData, setCartData] = React.useState(JSON.parse(localStorage.getItem('cart__data')) || null)
    const navigate = useNavigate()

    return cartData ? (
        <div>Cart</div>
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