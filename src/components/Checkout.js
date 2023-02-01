import React from 'react'
import "../styles/checkout.css"
import { AiFillStar, AiOutlineLeft } from "react-icons/ai"
import Paypal from './Paypal'
import { Link, useParams } from 'react-router-dom';
import { placesStore } from '../store/Store'
import { RiAwardFill } from 'react-icons/ri';


const Checkout = () => {

  const params = useParams();
  const { id } = params;

  let daysSelected = params;

  let daysFinal = daysSelected.days;

  const checkoutPagePlace = placesStore.find((item) => item.id === id)

  const { name, placesName, price, days, carouselPic1, stars} = checkoutPagePlace || {}

  return (
    <div className='checkout'>
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <Link to={`/${checkoutPagePlace.id}`} className="checkoutLeftArrow">
            <AiOutlineLeft />
          </Link>
          <h1 className='text-4xl font-semibold confirm'>Confirm and pay</h1>
        </div>
        <div className='border-b-2 '>
          <h1 className='mt-8 mb-4 text-2xl font-semibold'>Your trip</h1>
          <div className='flex justify-between'>
            <p className='font-semibold'>Dates</p>
            <button className='underline font-semibold'>Edit</button>
          </div>
          <h1 className='mb-6'>Feb 4-9 </h1>
          <div className='flex justify-between' >
            <p className='font-semibold'>Guests</p>
            <button className='underline font-semibold'>Edit</button>
          </div>
          <h1 className='mb-6'>1 guest</h1>
        </div>
        <div>
          <h1 className='mt-8 mb-4 text-xl font-semibold'>You Are About To Pay ${240 + 65 + (price * daysFinal)}</h1>
          <div className='flex'>
            <Paypal initialPrice={price} nameOfPlace={placesName} daysSelected={days} />
          </div>
        </div>
      </div>
      <div className='place-checkout-details'>
        <div className='flex gap-6 border-b-2 pb-5 pcdMainChild'>
          <img src={carouselPic1} alt="" />
          <div className='flex flex-col justify-between items-start'>
            <div>
              <p className='text-slate-500 text-sm'>{name}</p>
              <p className='text-slate-700 cozy'>Cozy bungalow with amazing seaview, secret garden</p>
            </div>
            <div className='flex items-center text-sm rvsNSuper'>
              <div className='flex items-center text-sm mr-2'>
                <AiFillStar className='mr-1'></AiFillStar>
                <h4 className='font-medium'>{stars} </h4>
                <p className='text-slate-500'><span>({Math.floor(Math.random() * (999 - 100 + 1) + 100)}</span> reviews)</p>
              </div>
              <div className='flex items-center'>
                <RiAwardFill />
                <span className='ml-1 text-slate-500'> Superhost .</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <h1 className='text-lg border-b-2 pb-5 mt-5 w-full'>Your booking is protected by <span className='text-rose-500 text-xl font-bold'>air</span><span className='text-xl font-bold'>cover</span></h1>
        </div>
        <div>
          <div className='flex flex-col gap-3 text-base border-b-2 pb-5'>
            <h1 className='mt-6 text-2xl font-semibold'>Price details</h1>
            <div className="flex justify-between">
              <p>${price} X {daysFinal} days</p>
              <p>${price * daysFinal}</p>
            </div>
            <div className="expense-title-hold">
              <p>Cleaning fee</p>
              <p>$240</p>
            </div>
            <div className="expense-title-hold">
              <p>Processing fee</p>
              <p>$65</p>
            </div>
          </div>
          <div className='justify-between text-lg flex font-semibold mt-5'>
            <p>Total <span className='underline'>(USD)</span></p>
            <p className=''>${240 + 65 + (price * daysFinal)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout