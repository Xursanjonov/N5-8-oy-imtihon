import React, { memo } from 'react'
import Slider from "react-slick";
import NextIcon from '../../assets/icons/NextIcon'
import BackIcon from '../../assets/icons/BackIcon'
import { COMMENTS } from '../../static';
import CommentItem from './CommentItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommentWrapper = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max-w-[1240px] w-full mx-auto flex flex-col gap-10'>
            <div className="w-full flex items-center justify-between">
                <h3 className='text-5xl font-extrabold'>OUR HAPPY CUSTOMERS</h3>
                <div className="flex items-center justify-center gap-4">
                    <button> <BackIcon /> </button>
                    <button> <NextIcon /> </button>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings} className='w-full pb-4'>
                    {
                        COMMENTS?.map(comment => <CommentItem key={comment?.id} comment={comment} />)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default memo(CommentWrapper)