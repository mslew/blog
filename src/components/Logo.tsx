import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faM, faCircle } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return (
    <div className='flex justify-center items-center'>
        <FontAwesomeIcon className='w-6 absolute z-10 text-purple-600' icon={faM} />
        <FontAwesomeIcon className='bg-black w-14 absolute text-gray-900 ring-4 ring-purple-600 rounded-full' icon={faCircle} />
    </div>
  )
}

export default Logo