import React, { useContext, useReducer } from 'react'
import { AppContext } from '../../contexts/AppContext'

function BackgroundImage() {
    const { state } = useContext(AppContext);
    const { theme } = state;

    return (
        <div className='absolute h-[200px] md:h-[300px] top-0 left-0 right-0 -z-[1]  '>
            {
                theme === 'light' ?
                    <img src="/bg-desktop-light.jpg" alt="" className='h-full object-cover w-full' />
                    :
                    <img src="/bg-desktop-dark.jpg" alt="" className='h-full object-cover w-full' />
            }
        </div>
    )
}

export default BackgroundImage
