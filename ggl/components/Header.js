import React from 'react'
import { SearchCircleIcon,MenuIcon } from '@heroicons/react/outline'
import Avatar from './Avatar'
function Header() {
    return (
        <header className = "flex w-full p-5 text-sm font-semibold text-gray-700  justify-between ">

            {/*Left */}
            <div className =" flex space-x-4  items-center">  
                <p className ='link'>About</p>
                <p className='link'>Store</p>
            </div>

            {/* Right */}
            <div className = "flex space-x-4  items-center">
                <p className = 'link'>Gmail</p>
                <p className ='link'>Images</p>
                    {/* Icons */}
                <MenuIcon className="h-10 w-10 p-2 hover:bg-gray-100 cursor-pointer rounded-full "/>
                    {/* Avatar */}
                <Avatar url='https://images.unsplash.com/photo-1634853166008-2c9e90321c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
            </div>

        </header>
    )
}

export default Header
