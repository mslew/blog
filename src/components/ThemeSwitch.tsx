"use client";

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
    const { systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button className='mt-20 flex justify-center items-center whitespace-normal flex-wrap rounded-3xl'
        onClick={() => {
            theme == "dark"? setTheme('light'): setTheme("dark")}
        }>
            {theme === 'dark' ?
            //dark mode on
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon className='absolute text-black z-10 mr-5' icon={faMoon} size='sm'/>
                <FontAwesomeIcon className='absolute' icon={faToggleOn} size='3x'/>
            </div>
            :
            //dark mode off
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon className='absolute text-white z-10 ml-5' icon={faSun} size='sm'/>
                <FontAwesomeIcon className='absolute' icon={faToggleOff} size='3x'/>
            </div>
            }
        </button>
    )
}

export default ThemeSwitch