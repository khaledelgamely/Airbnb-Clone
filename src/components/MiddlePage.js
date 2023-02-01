import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { counterActions } from '../redux/State';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import "../styles/middlePage.css"
import img1 from "../assets/original.webp"
import img2 from "../assets/6d630a4e-cb6f-440e-83cc-a967b1685389.webp"

const MiddlePage = ({ place }) => {

    const { showMenuPop2 } = useSelector((state) => state.counter);
    let menuRef = useRef();
    const dispatch = useDispatch();

    const showMenuPopHandler = () => {
        dispatch(counterActions.showMenu2())
        document.body.classList.add("over")

    }
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                dispatch(counterActions.hideMenu2())

            }
        }
        document.addEventListener("mousedown", handler);
    })

    return (
        <div className='modal-hold'>
            <div className='my-10'>
                <h1 className='text-2xl font-semibold'>No Reviews (Yet)</h1>
                <div className='text-xl   my-5 bb'>
                    <div className='flex items-center gap-5'>
                        <AiOutlineStar className='text-3xl' />
                        <p >This host has {Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews for other places to<br />  stay.</p>
                    </div>
                    <button className='smr' onClick={() => showMenuPopHandler()}> Show other reviews</button>
                </div>
            </div>
            <div className={showMenuPop2 ? "menuHidden" : 'active'} >
                <div className="dropMenu w-4/6 flex overflow-auto revPopCon" ref={menuRef}>
                    <div className='px-5 '>
                        <div className='flex items-center text-3xl font-bold my-8 rvwStars'>
                            <AiFillStar></AiFillStar>
                            <h4 className='ml-1 mr-4'>{place.stars}</h4>
                            <p className='underline'><span>{Math.floor(Math.random() * (999 - 100 + 1) + 100)}</span> reviews</p>
                        </div>
                        <div className='flex gap-20 bullets'>
                            <div className='flex flex-col gap-3 w-1/3 bullChild'>
                                <div className='tape-item'>
                                    <h1 >Cleanliness</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='tape' ></div>
                                        <p>4.6</p>
                                    </div>
                                </div>
                                <div className='tape-item'>
                                    <h1>Accuracy</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='tape' ></div>
                                        <p>4.6</p>
                                    </div>
                                </div>
                                <div className='tape-item'>
                                    <h1>Communication</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='tape' ></div>
                                        <p>4.6</p>
                                    </div>
                                </div>
                                <div className='tape-item'>
                                    <h1>Location</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='tape' ></div>
                                        <p>4.6</p>
                                    </div>
                                </div>
                                <div className='tape-item'>
                                    <h1>Check-in</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='tape' ></div>
                                        <p>4.6</p>
                                    </div>
                                </div>
                                <div className='tape-item'>
                                    <h1>Value</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='tape' ></div>
                                        <p>4.6</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-2/3 review'>
                                <div>
                                    <div className='review-item'>
                                        <img src={img1} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.
                                        </p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img2} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img1} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img2} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img1} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img2} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img1} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img2} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img1} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                                <div>
                                    <div  className='review-item'>
                                        <img src={img2} alt="" />
                                        <div>
                                            <h3 className="text-lg font-bold uppercase">Great stay</h3>
                                            <p>October 2022</p>
                                        </div>
                                    </div>
                                    <p className="reviewMainPara">We stayed in Horizon and in Hideout,
                                        and for me this one is one with more soul, river sound is stunning,
                                        chilling all day next to it is something special. It's more closed
                                        upstairs. But still lots of animals around you, so be prepared!
                                        Definitely nice experience. In quiet village, very nice to go
                                        with scooter around,
                                        to see real Bali, culture and people.</p>
                                </div>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddlePage