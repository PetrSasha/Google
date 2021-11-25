import React, { useRef } from 'react'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import {MicrophoneIcon} from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'

function Main() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
            
        if (!term) return;

        router.push(`/search?term=${term}`);
    };
    return (
        <form className="flex flex-col items-center mt-44 flex-grow">
            <Image src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            objectFit='contain' height={100} width={300} />
            <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border
             border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
                <SearchIcon className = 'h-5 mr-3 text-gray-500' />
                <input ref={searchInputRef} type='text' className="focus:outline-none flex-grow" />
                <MicrophoneIcon className='h-5 '/>
            </div>
            <div className=' flex flex-col space-y-2 justify-center sm:flex-row w-1/2'>
                <button onClick={search}  className='btn'> Search in Google</button>
            </div>
        </form>
    )
}

export default Main

