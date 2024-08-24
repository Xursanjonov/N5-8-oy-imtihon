import React, { memo } from 'react'
import { Button } from 'antd'
import { useCreateCategoryMutation } from '../../../context/api/categoryApi'

const CreateCategory = () => {
    const [title, setTitle] = React.useState('')
    const [newCategory, { data, isFetching }] = useCreateCategoryMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        newCategory({ title: title })
        console.log(title)
    }
    console.log(data)

    return (
        <div className='w-full grid gap-6'>
            <h1 className='text-3xl font-bold'>Create Category</h1>
            <form onSubmit={handleSubmit} className="w-[500px] flex items-center justify-start gap-4">
                <label htmlFor="category-title" className='w-full grid gap-2'>
                    <span className='text-lg font-semibold'>Category Title</span>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="category-title"
                        placeholder='Title' className='w-full py-1 px-3 text-lg font-semibold border-2 rounded-md'
                    />
                </label>
                <label htmlFor="category-btn" className='w-[120px] grid gap-2'>
                    <span className='text-lg font-semibold'>Button</span>
                    <Button color='primary' type='submit' className='w-[120px] h-[38px] text-lg font-semibold bg-blue-500'>Create</Button>
                </label>
            </form>
        </div>
    )
}

export default memo(CreateCategory)