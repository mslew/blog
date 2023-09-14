"use client";

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitch = () => {
    const [dark, setDark] = useState(true)

    return (
        <button className='mt-20 flex justify-center items-center whitespace-normal flex-wrap rounded-3xl'
        onClick={() => {
            setDark(!dark)
        }}>
            {dark ?
            //dark mode on
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon className='absolute w-4 text-black z-10 mr-6' icon={faMoon}/>
                <FontAwesomeIcon className='absolute w-16' icon={faToggleOn}/>
            </div>
            :
            //dark mode off
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon className='absolute w-3 text-white z-10 ml-6' icon={faSun}/>
                <FontAwesomeIcon className='absolute w-16' icon={faToggleOff}/>
            </div>
            }
        </button>
    )
}

export default ThemeSwitch