import React, { memo } from 'react'
import { BRANDS } from '../../static'

const Brand = () => {
    // useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <section className='max-w-[1240px] w-full my-10 mx-auto flex flex-wrap items-center justify-between bg-white gap-4'>
            {
                BRANDS.map(brand => (
                    <a href={brand?.link} target='_blank'
                        className='w-[290px] h-[250px] p-4 mx-auto hover:shadow-lg rounded-md hover:shadow-gray-500 bg-white'>
                        <img title={brand?.title} className='w-full h-full object-contain bg-white' key={brand?.id} src={brand?.image} alt="" />
                    </a>
                ))
            }
        </section>
    )
}

export default memo(Brand)