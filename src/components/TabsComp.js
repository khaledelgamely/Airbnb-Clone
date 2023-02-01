import React from 'react'
import Tab from './Tab'
import { useState } from 'react';

const TabsComp = () => {
    
    const iconsCategory = [
        {
            id: 1,
            img: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
            tab: <Tab data="tropical" />
        },
        {
            id: 2,
            img: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
            tab: <Tab data="nationalPark" />
        },
        {
            id: 3,
            img: 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
            tab: <Tab data="arctic" />
        },
        {
            id: 4,
            img: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
            tab: <Tab data="beaches" />
        },
        {
            id: 5,
            img: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
            tab: <Tab data="tinyHomes" />
        },
        {
            id: 6,
            img: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
            tab: <Tab data="design" />
        },
        {
            id: 7,
            img: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
            tab: <Tab data="islands" />
        },
        {
            id: 8,
            img: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
            tab: <Tab data="view" />
        },
        {
            id: 9,
            img: 'https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg',
            tab: <Tab data="couple" />
        },
        {
            id: 10,
            img: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
            tab: <Tab data="amazingPools" />
        },
    ]


    const [dynamicId, setDynamicId] = useState(1);
    const componentHandler = (id) => {
        return iconsCategory[id - 1].tab
    } 
    
    return (
        <div className='homePage'>
            <div className="categoryMainIcon" >
                {iconsCategory.map((icon) => (
                    <div className="cursor-pointer" >
                        <img src={icon.img} alt="" className={`w-10`}  onClick={() => componentHandler(setDynamicId(icon.id))}/>
                    </div>
                ))}
            </div>
            <div className="mt-12">
               {componentHandler(dynamicId)}
            </div>
        </div>
    )
}

export default TabsComp