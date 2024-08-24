import React, { memo, useEffect } from 'react'
import { Button } from 'antd';
import { COMMENTS } from '../../static';
import { ratingTotal } from '../../static/CustemsFuction';
import SuccessIcon from '../../assets/icons/SuccessIcon';

const TabsWrapper = () => {
    const [tabActive, setTabActive] = React.useState(localStorage.getItem('tabActive') || 'tab__2')
    const activeTabClass = `py-6 border-0 border-b-2 border-black text-[20px] font-semibold rounded-none`
    const defaultTabClass = `py-6 border-0 border-b-2 text-[20px] font-semibold rounded-none text-[#00000099]`
    useEffect(() => window.scrollTo(0, 0), [])
    useEffect(() => localStorage.setItem('tabActive', tabActive), [tabActive])


    return (
        <div className='w-full mt-20 grid gap-6' >
            <div className="w-full grid grid-cols-3">
                <Button onClick={() => setTabActive('tab__1')} className={`${tabActive === 'tab__1' ? activeTabClass : defaultTabClass}`}>
                    Products Detailes
                </Button>
                <Button onClick={() => setTabActive('tab__2')} className={`${tabActive === 'tab__2' ? activeTabClass : defaultTabClass}`}>
                    Rating & Reviews
                </Button>
                <Button onClick={() => setTabActive('tab__3')} className={`${tabActive === 'tab__3' ? activeTabClass : defaultTabClass}`}>
                    FAQs
                </Button>
            </div>
            {
                tabActive === 'tab__1' ? (<div className="tab__1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam eaque delectus commodi dolorum officiis porro ducimus laboriosam odio deserunt natus deleniti, et nostrum aliquid quis voluptatum vero dolores. Ex ut corporis placeat, minima explicabo nihil cumque impedit illo, odit rerum harum laboriosam quaerat fuga veniam est omnis, facere perferendis ipsam? Dolores nobis ab, labore inventore id minima non, in error totam quaerat laborum eius! Iure quos incidunt consequuntur, quas quidem sit autem neque nostrum obcaecati similique! Impedit eos rem enim, ut, quae dolore quis doloremque non nostrum sit esse possimus, aperiam dolores iure sunt a accusantium praesentium. Libero, ad.
                    </p>
                </div>)
                    : tabActive === 'tab__2' ?
                        (<div className="tab__2 w-full mt-6 flex flex-wrap gap-5">
                            {COMMENTS?.slice(0, 6)?.map(comment => (
                                <ul className='w-[610px] h-[250px] p-8 flex flex-col gap-3 shadow-sm border-[1px] rounded-[20px]'>
                                    <li>{ratingTotal(comment?.rating)} </li>
                                    <li className='flex items-center text-[20px] font-bold gap-1'>
                                        {`${comment?.fname} ${comment?.lname}.`} <SuccessIcon />
                                    </li>
                                    <li className='max-w-[522px] w-full text-[15.5px] text-[#00000099]'>
                                        {comment?.text}
                                    </li>
                                </ul>
                            ))}
                        </div>) :
                        (<div className="tab__3 w-full grid gap-4">
                            <h4 className='text-xl font-semibold'>Why FAQs Are Important</h4>
                            <p>
                                We value your time, and we know that finding answers quickly is crucial. That’s why we’ve created this comprehensive FAQs section. Whether you're new to our platform or a returning customer, these FAQs aim to make your experience smoother and more enjoyable. We believe in transparency and customer satisfaction, so we`ve compiled a list of questions that cover a wide range of topics, including ordering, shipping, returns, and more.
                            </p>
                            <h4>What You Can Find Here</h4>
                            <ol type='1' className='w-full items-center flex flex-col gap-3 text-[17px]'>
                                <li>
                                    <span className='font-semibold mr-2'>Product Information:</span>
                                    Curious about the quality, features, or sizing of our products? We've got you covered. Our FAQs provide detailed explanations about the materials we use, how to care for your items, and how to choose the right size for a perfect fit. We also address any concerns you might have about product availability and restocking.
                                </li>
                                <li>
                                    <span className='font-semibold mr-2'>Ordering Process:</span>
                                    Unsure how to place an order? Our step-by-step guide will walk you through the process from start to finish. We explain how to navigate our website, select products, and apply discount codes. You'll also find information on payment options, including credit cards, PayPal, and other methods we accept.
                                </li>
                                <li>
                                    <span className='font-semibold mr-2'>Shipping and Delivery:</span>
                                    Wondering when your order will arrive? Our shipping FAQs cover everything from estimated delivery times to tracking your package. We provide information on domestic and international shipping, as well as any additional costs you might incur. Learn more about our express delivery options and what to do if your package is delayed or lost.
                                </li>
                                <li>
                                    <span className='font-semibold mr-2'>Returns and Exchanges:</span>
                                    Not satisfied with your purchase? No worries. Our FAQs explain our return and exchange policies in detail. We`ll guide you on how to initiate a return, the conditions for returns, and the timeframe within which you need to act. If you prefer an exchange, we’ll show you how to select a replacement item and handle the logistics.
                                </li>
                                <li>
                                    <span className='font-semibold mr-2'>Account Management:</span>
                                    Need help with your account? Learn how to create, manage, and delete your account. Our FAQs cover password recovery, updating personal information, and setting up preferences for a personalized shopping experience.
                                </li>
                                <li>
                                    <span className='font-semibold mr-2'>Customer Support:</span>
                                    Have an issue that isn't covered here? Our FAQs section also includes information on how to reach our customer support team. Whether you prefer email, phone, or live chat, we provide multiple channels to assist you. We’re committed to resolving any issues promptly and ensuring your satisfaction.
                                </li>
                                <li>
                                    <span className='font-semibold mr-2'>Sustainability Practices:</span>
                                    Interested in our environmental impact? We’re proud to share our sustainability practices in the FAQs. Learn more about the materials we use, our ethical sourcing, and how we’re working to reduce our carbon footprint. We believe in doing our part for the planet and are happy to answer any questions you might have.
                                </li>
                            </ol>

                        </div>)
            }
        </div>
    )
}

export default memo(TabsWrapper)