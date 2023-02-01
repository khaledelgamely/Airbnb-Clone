import React, { useState } from 'react'
import { MdOutlineFilterList } from "react-icons/md"
import { ImManWoman } from "react-icons/im"
import { MdOutlinePets } from "react-icons/md"
import "../styles/searchDetails.css"
import { placesStore } from '../store/Store';
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { RiArrowUpDownFill } from 'react-icons/ri';



const SearchDetails = () => {

    const [openPetReviews, setOpenPetReviews] = useState(false);
    const [openCouple, setOpenCouple] = useState(false);
    const [filter, setFilter] = useState(false);
    const [co, setCo] = useState(false);
    const [pet, setPet] = useState(false);

    const params = useParams();
    const { loc } = params;
    const returnedLocationsList = placesStore.filter(place => place.location.toLowerCase().includes(loc.toLowerCase()))
    const [originalArray, setOriginalArray] = useState(returnedLocationsList);


    const openFilterHandler = () => {
        setFilter(!filter)
        setOpenCouple(false)
        setOpenPetReviews(false)
    }

    const lowToHighFilter = (arr) => {
        const sortedArr = arr.sort((a, b) => +(a.price) - (b.price))
        setOriginalArray(sortedArr)
        setFilter(!filter)
        
    }
    /*----------------------------------------------------------*/

    const openHandleCoupling = () => {
        setOpenCouple(!openCouple)
        setCo(false)
        setPet(false)
        setFilter(false)
        setOpenPetReviews(false)
    }
    const openHandlePets = () => {
        setOpenPetReviews(!openPetReviews)
        setPet(false)
        setCo(false)
        setFilter(false)
        setOpenCouple(false)

    }

    /*----------------------------------------------------------------*/
    const handlePets = () => {
        const mute = returnedLocationsList.filter((item)=>{
            return item.pets === true;
        })
        console.log(mute)
        setOriginalArray(mute)
        setPet(true)
    }
    const handleCouple = () => {
        const mute = returnedLocationsList.filter((item)=>{
            return item.couple === true;
        })
        console.log(mute)
        setOriginalArray(mute)
        setCo(true)
    }

    /*----------------------------------------------------------------*/
    const handleNoPet = () => {
        setOriginalArray(returnedLocationsList)
        setPet(false)
    }
    const handleNoCouple = () => {
        setOriginalArray(returnedLocationsList)
        setCo(false)
    }

    return (
        <div className='searchDetails'>
            <div className='filterIconContainer'>
                <div>
                    <div className='filterBtn' onClick={openFilterHandler}>
                        <MdOutlineFilterList />
                        <h1>Filter</h1>
                    </div>
                    {
                        filter &&
                        <div className='flex items-center gap-3 filterDrop mt-3' >
                            <p onClick={() => lowToHighFilter(returnedLocationsList)}> Low To height</p>
                            <RiArrowUpDownFill />
                        </div>
                    }
                </div>

                <div>
                    <div className='filterBtn' onClick={openHandleCoupling}>
                        <ImManWoman /><h1>Couple friendly</h1>
                    </div>
                    {openCouple &&
                        <div className='filterDrop'>
                            <p onClick={handleCouple}>Yes</p>
                            <p onClick={ handleNoCouple}>No</p>
                        </div>
                    }
                </div>

                <div >
                    <div className='filterBtn ' onClick={openHandlePets}>
                        <MdOutlinePets />
                        <h1>Pets Friendly</h1>
                    </div>
                    {openPetReviews &&
                        <div className='filterDrop'>
                            <p onClick={handlePets}>Yes</p>
                            <p onClick={handleNoPet}>No</p>
                        </div>
                    }
                </div>
            </div>
            <div >
            <h1 className='text-3xl font-medium my-8'>top 10 Stays in {loc}</h1>
                {
                    originalArray.length > 0 && <div>
                        {originalArray.map(place => {
                            return (
                                <div className='mb-10 border-b-2 pb-10' key={place.id} >
                                    <Link to={`${place.id}`} className="searchDetailsPlace">
                                        <img src={place.homeMainPic} className="searchDetailsImage" />
                                        <div className='flex flex-col justify-between'>
                                            <p className='text-md'> {place.name} </p>
                                            <p className='text-xl mt-1 flex'><AiFillStar className=' fill-red-400 text-3xl '/> {place.stars} ({Math.floor(Math.random() * (999 - 100 + 1) + 100)}) </p>
                                            {!pet && !co &&
                                            <p className='text-gray-500 lightCozyP'>"Light cosy room in a modern home. Cosy clean light room with single bed and Wi-Fi, Furniture in this room will be update to higher standards by the time of your stay."</p>
                                            }
                                            {pet && <p className='petWlcHold'> <img src='https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg' className=' w-16 h-16 inline-block' />  Pets Are welcome </p>}
                                            {co && <p className='coupleFriendlyHold'> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/couple-3431093-2863604.png" className='w-12 h-10 inline-block' /> Couple Friendly options </p>}
                                            <p className=''> ${place.price}/ night </p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div >
    )
}
export default SearchDetails
