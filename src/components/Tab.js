import React from 'react'
import { placesStore } from '../store/Store'
import "react-alice-carousel/lib/alice-carousel.css";
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';
import "../styles/tab.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tab = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className='tab1-hold'>
            {placesStore.map((item => {
                if (item.type === data) {
                    return (
                        <div className="cart " key={item.id}>
                            <Link to={`/${item.id}`}>
                                <Slider {...settings} className="">
                                    <img src={item.homeMainPic} alt='' />
                                    <img src={item.carouselPic1} alt='' />
                                    <img src={item.carouselPic2} alt='' />
                                    <img src={item.carouselPic3} alt='' />
                                    <img src={item.carouselPic4} alt='' />
                                    <img src={item.carouselPic5} alt='' />
                                </Slider>
                            </Link>

                            <div className="">
                                <div className="flex justify-between mt-2">
                                    <h2 className='font-semibold prod-name'>{item.name}</h2>
                                    <div className='flex items-center gap-1 text-gray-700 text-sm '>
                                        <p className='prod-star text-base'>  {item.stars}</p>
                                        <AiFillStar className='star-icon'></AiFillStar>
                                    </div>
                                </div>
                                <p className='text-slate-500'>9.475 kilometers away</p>
                                <p className='text-slate-500'>Mar 25 - Apr 1</p>
                                <div className='flex items-center gap-1'>
                                    <p className='text-base font-semibold'>${item.price}</p><span> night </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }))}
        </div>
    )
}

export default Tab