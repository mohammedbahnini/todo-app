import React from 'react'
import ThemeSwitch from '../Tasks/ThemeSwitch'

function Header() {
    return (
        <div className='flex justify-between items-center pt-12' > 
            <h1 className='uppercase text-white font-bold tracking-[8px]  text-2xl '>todo</h1>
            <ThemeSwitch />
        </div>
    )
}

export default Header
