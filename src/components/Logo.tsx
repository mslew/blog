import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faM, faCircle } from '@fortawesome/free-solid-svg-icons'

const Logo = ({className}: {className: string}) => {
  return (
    <span className={'fa-layers fa-fw' + className}>
        <FontAwesomeIcon className='bg-black text-gray-900 ring-4 ring-purple-600 rounded-full' fontSize={60} icon={faCircle}/>
        <FontAwesomeIcon className='pl-4 text-purple-600' fontSize={35} icon={faM}/>
    </span>
  )
}

export default Logo