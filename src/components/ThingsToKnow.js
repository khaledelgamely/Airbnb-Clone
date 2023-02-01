import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

const ThingsToKnow = () => {
    return (
        <div className='my-10'>
            <h1 className='font-semibold text-2xl mb-6'>Things To Know</h1>
            <div className="flex justify-between things-container">
                <div>
                    <h1>House rules</h1>
                    <p>Check-in: 3:00 PM - 10:00 PM</p>
                    <p>Checkout before 10:00 AM</p>
                    <p>2 guests maximum</p>
                    <button className='underline flex items-center'>Show More <AiOutlineRight className="font-extrabold"/></button>
                </div>
                <div>
                    <h1>Safety & property</h1>
                    <p>Carbon monoxide alarm not reported</p>
                    <p>Smoke alarm not reported</p>
                    <button className='underline flex items-center'>Show More <AiOutlineRight/></button>
                </div>
                <div>
                    <h1>Cancellation policy</h1>
                    <p>Add your trip dates to get the cancellation details for this stay.</p>
                    <button className='underline flex items-center'>Add Dates<AiOutlineRight/></button>
                </div>
            </div>
        </div>
    )
}

export default ThingsToKnow