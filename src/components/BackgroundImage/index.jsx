import React, { useContext, useReducer } from 'react'
import { AppContext } from '../../contexts/AppContext'

function BackgroundImage() {
    const { state } = useContext(AppContext);
    const { theme } = state;

    return (
        <div className='absolute h-[200px] top-0 left-0 -z-[1] '>
            {
                theme === 'light' ?
                    (
                        <img src="/public/bg-desktop-light.jpg" alt="" className='h-full object-cover' />

                    )
                    :
                    (
                        <img src="/public/bg-desktop-dark.jpg" alt="" className='h-full object-cover' />

                    )
            }
        </div>
    )
}

export default BackgroundImage
