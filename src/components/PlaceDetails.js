import React, { useState } from 'react'
import "../styles/placeDetails.css"
import img from "../assets/7c6c11cb-3ca7-4618-8b49-9b00079089af.webp"
import { placesStore } from '../store/Store'
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineRight, AiOutlineWifi, AiOutlineCar, AiOutlineLeft } from 'react-icons/ai';
import { TbToolsKitchen2 } from 'react-icons/tb';
import {
  MdOutlinePool,
  MdSmokeFree,
  MdFavoriteBorder,
  MdHotTub,
  MdOutlineLocalLaundryService
} from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { RiAwardFill, RiMedal2Fill } from 'react-icons/ri';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { GiWashingMachine } from 'react-icons/gi';
import { BiBed } from 'react-icons/bi';
import { FaCalendarCheck, FaKey } from 'react-icons/fa';
import CalendarNavBar from './CalendarNavBar';
import MiddlePage from './MiddlePage';
import ThingsToKnow from './ThingsToKnow';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../redux/State';


const PlaceDetails = () => {

  const { id } = useParams();
  const placeClicked = placesStore.find(place => place.id === id)
  const { name, homeMainPic, carouselPic1, carouselPic2, carouselPic3, carouselPic4, carouselPic5 } = placeClicked || {}


  const [activeImg, setActiveImg] = useState(false);
  const [defaultImage, setDefaultImage] = useState(carouselPic1);
  const [show, setShow] = useState(true);

  const [displayPhotos, setDisplayPhotos] = useState(false);

  const getImgSrcHandler = (e) => {
    setDefaultImage(e.target.src)
    setActiveImg(true)
  }

  const setDefaultImgHandler = () => {
    setDefaultImage(carouselPic1)
    setActiveImg(false);
  }

  const handlePhotosOpining = () => {
    setDisplayPhotos(true)
  }
  return (
    <div className=''>
      {displayPhotos ?
        <div className={displayPhotos ? 'displayPhotos' : "hidePhotos"}>
          <div className='flex justify-between px-10 pt-5 ClosePhotosPageDiv'>
            <button onClick={() => setDisplayPhotos(false)} className="ClosePhotosPage">
              <AiOutlineLeft />
            </button>
            <div className='flex gap-2 shareAndLove'>
              <div>
                <FiShare />
                <span>Share</span>
              </div>
              <div>
                <MdFavoriteBorder />
                <span>Love</span>
              </div>
            </div>
          </div>
          <div className=' pt-24 displayPhotoContainer'>
            <div className='a1'>
              <img src={homeMainPic} alt=""  />
            </div>
            <div className=' a2'>
              <img src={carouselPic1} alt="" />
              <img src={carouselPic2} alt="" />
            </div>
            <div className='a1'>
              <img src={carouselPic3} alt=""/>
            </div>
            <div className=' a2'>
              <img src={carouselPic4} alt="" />
              <img src={carouselPic5} alt="" />
            </div>
          </div>
        </div>

        :
        <div className='placeDetails'>
          <h1 className="font-semibold text-2xl mt-8">{name}</h1>
          <div className='flex gap-8 items-center justify-between '>
            <div className='flex gap-5 items-center mt-1 mb-5'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center'>
                  <AiFillStar className='text-lg'></AiFillStar>
                  <h4 className='text-base mr-2'>{placeClicked.stars}</h4>
                  <p className='text-base underline font-medium'><span className='text-sm'>{Math.floor(Math.random() * (999 - 100 + 1) + 100)}</span> reviews</p>
                </div>
                <div className='flex items-center'>
                  <RiAwardFill />
                  <span> Superhost .</span>
                </div>
                <p className='font-semibold underline'>Kaş, Antalya, Turkey</p>
              </div>
            </div>
            <div className='flex gap-2 shareAndLove'>
              <div>
                <FiShare />
                <span>Share</span>
              </div>
              <div>
                <MdFavoriteBorder />
                <span>Love</span>
              </div>
            </div>
          </div>

          <div className='imageContainer flex gap-2 mb-14'>
            <div className='dd relative'>
              {activeImg ? <img src={defaultImage} alt="" />
                :
                <img src={carouselPic1} alt="" />
              }
              <div className='overlay'></div>
            </div>
            <div className='flex justify-center items-center gap-2 xx' >
              <div className='flex flex-col gap-2 relative'>
                <img src={carouselPic2} alt="" className='' onMouseOver={getImgSrcHandler} onMouseLeave={setDefaultImgHandler} />
                <img src={carouselPic3} alt="" onMouseOver={getImgSrcHandler} onMouseLeave={setDefaultImgHandler} />

              </div>
              <div className='flex flex-col gap-2 relative'>
                <img src={carouselPic4} alt="" className='' onMouseOver={getImgSrcHandler} onMouseLeave={setDefaultImgHandler} />
                <img src={carouselPic5} alt="" onMouseOver={getImgSrcHandler} onMouseLeave={setDefaultImgHandler} />
                <div onClick={handlePhotosOpining}>
                  <RxDragHandleDots2 />
                  <span>Show all photos</span>
                </div>
              </div>
            </div>

          </div>


          <div className='flex gap-20'>
            <div className='flex-1'>
              <div className='bb owner-details'>
                <div>
                  <h1 className='text-2xl font-semibold'>Entire rental unit hosted by Ben </h1>
                  <p className='bor'>{Math.floor(Math.random() * 6) + 3} guests . {Math.floor(Math.random() * 5) + 3} beds . {Math.floor(Math.random() * 2) + 3} bath</p>
                </div>
                <img src={img} alt="" />
              </div>
              <div className='bb flex flex-col gap-10 my-10'>
                <div className='door-checking'>
                  <RiMedal2Fill className='text-3xl' />
                  <div>
                    <p className='text-xl font-semibold'>Onur is a Superhost. </p>
                    <p> You can check in with the doorman.</p>
                  </div>
                </div>
                <div className='door-checking'>
                  <FaKey className='text-3xl' />
                  <div>
                    <p className='text-xl font-semibold'>Self check-in. </p>
                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests </p>
                  </div>
                </div>
                <div className='door-checking'>
                  <FaCalendarCheck className='text-3xl' />
                  <div>
                    <p className='text-xl font-semibold'>Great Date. </p>
                    <p> 90% of recent guests gave the location a 5-star rating.</p>
                  </div>
                </div>
              </div>
              <div className='bb flex flex-col gap-8'>
                <img src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' alt='' className='w-36' />

                <p className=''>Every booking includes free protection from Host cancellations,
                  listing inaccuracies, and other issues like trouble checking in.</p>

                <button className='underline flex items-center font-semibold'>Learn more</button>
              </div>

              <div className='flex flex-col gap-8 my-10 bb'>
                <p>Your perfect little stayCation in Bali is right here. We take relaxation seriously. <span className='underline font-bold'>Translate</span></p>
                <p>Stüdyo daire tarzı bir yapıya sahip olan yerin içerisinde 1 çift kişilik , 1 adet te tek kişilik yatak bulunuyor. Yaklaşık olarak verandası ile beraber 40 metrekaredir. İçerisinde ; duş ,tuvalet ve mutfak mevcuttur. Muhteşem bir manzarası ve kendisine ait bir bahçesi vardır. Ahşap yapıya sahip olmasından kaynaklı olarak özellikle temmuz ve ağustos aylarında gün içerisinde sıcak olabilir, geceleri ise tam tersi olarak en serin olan yerimizdir.</p>
                <button className='underline flex items-center font-semibold'>Show more <AiOutlineRight /></button>

              </div>
              <h1 className='text-2xl font-semibold mb-5'>Where you'll sleep</h1>
              <div className='bb bed-controller'>
                <div className='bedCItem'>
                  <div>
                    <BiBed />
                    <BiBed />
                  </div>
                  <div>
                    <h1>Bedroom</h1>
                    <p>1 double bed, 1 single bed</p>
                  </div>
                </div>
                <div className='bedCItem'>
                  <div>
                    <BiBed />
                    <BiBed />
                  </div>
                  <div>
                    <h1>Common space</h1>
                    <p>1 double bed, 1 single bed</p>
                  </div>
                </div>
              </div>
              <h1 className="font-semibold text-2xl my-5">What this Place Offers</h1>
              <div className='placeOffers bb'>
                <div className='space-bundle'>
                  <div>
                    <TbToolsKitchen2 />
                    <p>Kitchen</p>
                  </div>
                  <div>
                    <AiOutlineWifi />
                    <p>Wifi</p>
                  </div>
                  <div>
                    <AiOutlineCar />
                    <p>Free parking on premises</p>
                  </div>
                  <div>
                    <MdOutlinePool />
                    <p>Pool</p>
                  </div>
                </div>
                <div className='space-bundle'>
                  <div>
                    <MdHotTub />
                    <p>Hot Tube</p>
                  </div>
                  <div>
                    <MdSmokeFree />
                    <p className='line-through'>Smoke Alarm</p>
                  </div>
                  <div>
                    <MdOutlineLocalLaundryService />
                    <p>Dryer</p>
                  </div>
                  <div>
                    <GiWashingMachine />
                    <p>Washer</p>
                  </div>
                </div>
              </div>
              <MiddlePage place={placeClicked} />
            </div>
            <div className={show ? 'sideCard' : 'sideCal'}>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <p className="font-bold uppercase text-xl mr-1">{placeClicked.price}$</p>
                  <span className='text-lg'>night</span>
                </div>
                <div className='flex items-center'>
                  <AiFillStar className='text-lg'></AiFillStar>
                  <h4 className='text-base mr-2'>{placeClicked.stars}</h4>
                  <p className='text-base underline text-neutral-500 font-semibold'><span className='text-sm'>{Math.floor(Math.random() * (999 - 100 + 1) + 100)}</span> reviews</p>
                </div>
              </div>
              <div className='text-center'>
                <button className='reserve-date-button rounded-xl' onClick={() => setShow(false)}> Reserve</button>
                <div>You won't be charged yet</div>
              </div>
              {show ?
                <>
                  <div className='flex flex-col gap-3 text-base bbs'>
                    <div className="expense-title-hold">
                      <p>Servicing fee</p>
                      <p>$180</p>
                    </div>
                    <div className="expense-title-hold">
                      <p>Cleaning fee</p>
                      <p>$230</p>
                    </div>
                    <div className="expense-title-hold">
                      <p>Processing fee</p>
                      <p>$450</p>
                    </div>
                  </div>
                  <div className='justify-between text-xl flex font-semibold'>
                    <p>Total</p>
                    <p>Calculated At Checkout</p>
                  </div>
                </>
                :
                <div className='cpd'>
                  <CalendarNavBar placesId={id} placesNam={name} placesPic={carouselPic1} />
                  <button className='close-cal rounded' onClick={() => setShow(true)}>Close calendar</button>
                </div>
              }
            </div>
          </div>

          <ThingsToKnow />
        </div>

      }
    </div>
  )
}
// 
// 
export default PlaceDetails