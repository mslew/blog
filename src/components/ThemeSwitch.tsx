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
                <FontAwesomeIcon className='absolute text-black z-10 mr-8' icon={faMoon} size='2x'/>
                <FontAwesomeIcon className='absolute' icon={faToggleOn} size='5x'/>
            </div>
            :
            //dark mode off
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon className='absolute text-white z-10 ml-8' icon={faSun} size='xl'/>
                <FontAwesomeIcon className='absolute' icon={faToggleOff} size='5x'/>
            </div>
            }
        </button>
    )
}

export default ThemeSwitch