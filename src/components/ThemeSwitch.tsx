"use client";

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
    const { systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    console.log(systemTheme)

    return (   
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={() => {theme === "dark" ? setTheme('light') : setTheme("dark")}}/>
            <div className="w-14 h-7 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {theme === 'dark' ?
                //dark mode on
                    <FontAwesomeIcon icon={faSun} />
                :
                //dark mode off
                    <FontAwesomeIcon icon={faMoon} />
                }

            </span>
        </label>
    )
}

export default ThemeSwitch