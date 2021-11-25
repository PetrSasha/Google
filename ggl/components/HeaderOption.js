import React, { useState } from 'react'

function HeaderOption({title, Icon,selected}) {
  
    return (
            <div  className={`flex  items-center space-x-1 border-b-4 border-transparent 
        hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${selected && 'text-blue-500 border-blue-500'} `}>
            <Icon className='h-6 sm:h-5'  />
            <p className='hidden sm:inline-flex'>{title}</p>
        </div>
    )
    
}


export default HeaderOption