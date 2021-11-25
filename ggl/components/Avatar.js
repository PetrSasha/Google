import React from 'react'

function Avatar({url,className}) {
    return (
        <img className='h-10 w-10 cursor-pointer transition duration-150 transform hover:scale-150 hover:animate-pulse rounded-full' loading="lazy" src={url} alt="profile picture"/>
            
        
    )
}

export default Avatar
