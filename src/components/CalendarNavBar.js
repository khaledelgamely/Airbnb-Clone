import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { differenceInDays } from 'date-fns'
import { Link } from 'react-router-dom';

const CalendarNavBar = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    var daysCheck = differenceInDays(endDate, startDate);

    const data = daysCheck;

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    // {daysCheck === 0 ? <p className={daysCheck === 0 ? "days-0 " : "days-updated"}>days selected = 0</p> : <p className='days-updated'>{daysCheck} days selected</p>}

    return (

        <div className='NavBarCalendar'>

            <DateRangePicker color='black' ranges={[selectionRange]} minDate={new Date()} rangeColors={["#red"]} onChange={handleSelect} />

           { daysCheck === 0 ? <p className={daysCheck === 0 ? "hidden" : "days-selected"}>days selected = 0</p> : <p className='days-selected'>{daysCheck} days selected</p>}

            {daysCheck === 0 ? ""
                :
                <Link to={`/checkout/${props.placesId}/${daysCheck}`} state={{ data: data }}  >
                    <button className="checkout-btn rounded absolute">Proceed To checkout</button>
                </Link>}
        </div>

    )
}

export default CalendarNavBar
