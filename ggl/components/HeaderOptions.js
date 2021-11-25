import React from 'react'
import HeaderOption from './HeaderOption'
import 
{ 
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
}
from '@heroicons/react/outline'

function HeaderOptions() {
    const options = [
    {
        id:1,
        title: 'All',
        Icon: SearchIcon,
        selected:true
    },
    {
        id:2,
        title: 'Images',
        Icon: PhotographIcon,
        selected:false
    },
    {
        id:3,
        title: 'Videos',
        Icon: PlayIcon,
        selected:false
    },
    {
        id:4,
        title: 'News',
        Icon: NewspaperIcon,
        selected:false
    },
    {
        id:5,
        title: 'Maps',
        Icon: MapIcon,
        selected:false
    },
    {
        id:6,
        title: 'More',
        Icon: DotsVerticalIcon,
        selected:false
    },
]
    return (
        <div className="flex w-full justify-between lg:justify-evenly px-10 text-sm lg:text-base border-b-[1px]  ">
            <div className="flex w-[50%]   space-x-6  lg:space-x-20">
                {options.map( (option, index,) => 
                    <HeaderOption key={index} title={option.title} selected={option.selected} Icon={option.Icon}/>
                )}
            </div>
            <div className = 'flex w-[10%] space-x-4 justify-end  ml-40'>
                <p className = 'link'>Settings</p>
                <p className = 'link'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
