import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { MenuIcon, MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
function SearchHeader() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()

        const term = searchInputRef.current.value
        if (!term) return

        router.push(`/search?term=${term}`)
    }
    return (
        <header className = " sticky top-0 bg-white">
        <div className = ' flex w-full justify-between p-6'>
            <Image src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                height={30} width={145} className='cursor-pointer'
                onClick={() => router.push('/')}
            />
            <form className=' flex  flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                <input className="flex-grow w-full focus:outline-none" type='text' ref={searchInputRef}/>
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                    onClick={() => (searchInputRef.current.value = "")}
                />
                <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
                <button hidden type='submit' onClick={() =>{search}}>Search</button>
            </form>
            <div className="flex items-center cursor-pointer space-x-2">
            <MenuIcon className="h-10 w-10 p-2 hover:bg-gray-100 cursor-pointer rounded-full "/>
            <Avatar url='https://images.unsplash.com/photo-1634853166008-2c9e90321c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
            </div>
        </div>
        <HeaderOptions/>
        </header>
    )
}

export default SearchHeader
