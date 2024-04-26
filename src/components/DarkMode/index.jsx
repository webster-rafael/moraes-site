"use client"
import React, { useState, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { IoMoonSharp } from "react-icons/io5";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {

        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  
  return (
    <div onClick={() => setDarkMode(!darkMode)} className='fixed z-10 top-[5rem] lg:mt-0 mt-1 lg:top-24 windscreen:top-28 right-2 md:right-2 w-16 h-8 flex items-center rounded-full p-1 dark:bg-ouro bg-slate-950 cursor-pointer'>
        
        <IoMoonSharp className='text-white' size={18} />
        <div className='absolute bg-white dark:bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300' style={darkMode ? {left: '2px'} : {right: '2px'} }>

        </div>
        <BsSunFill
        className='ml-auto text-yellow-black' size={18} />
    </div>
  );
}

export default DarkMode;
