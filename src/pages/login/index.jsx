import React, { memo, useEffect } from 'react'
import { useSignInMutation } from '../../context/api/userApi'
import { useNavigate } from 'react-router-dom'
import { setToken, setUser } from '../../context/slices/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, setLogin] = React.useState({ username: 'xursanjonov', password: '15012004' })
    const [signIn, { data, isSuccess }] = useSignInMutation()

    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data?.payload?.token))
            dispatch(setUser(data?.payload?.admin))
            navigate('/admin/create-product')
        }
    }, [isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(login)
    }
    console.log(data)

    return (
        <section className='max-w-[1240px] w-full min-h-[700px] mx-auto flex items-center justify-center'>
            <form onSubmit={handleSubmit} className="w-[700px] h-[400px] mx-auto p-5 rounded-lg translate-y-[40%] border-2 grid gap-3">
                <h2 className='text-3xl mb-3 text-black text-center font-bold'>Login</h2>
                <label htmlFor="username" className='w-full grid gap-2'>
                    <span>Username</span>
                    <input value={login.username} onChange={(e) => setLogin(p => ({ ...p, username: e.target.value }))} className='w-full py-1 px-2 font-semibold border-2 rounded-md'
                        type="text" id="username" placeholder='Username' />
                </label>
                <label htmlFor="password" className='w-full grid gap-2'>
                    <span>Password</span>
                    <input value={login.password} onChange={(e) => setLogin(p => ({ ...p, password: e.target.value }))} className='w-full py-1 px-2 font-semibold border-2 rounded-md'
                        type="password" id="password" placeholder='Password' />
                </label>
                <label htmlFor="button" className='w-full grid mt-4'>
                    <button type='submit' className='w-full py-1 px-2 font-semibold border-2 rounded-md'>Login</button>
                </label>
            </form>
        </section>
    )
}

export default memo(Login)
