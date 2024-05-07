import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

function ThemeSwitch() {
    const { state, dispatch } = useContext(AppContext);
    const { theme } = state;
    const handleSwitch = () => {
        dispatch({
            type: 'CHANGE_THEME',
            theme: theme === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <div className='w-5 cursor-pointer  ' onClick={handleSwitch}>
            {theme === 'light' ?
                (
                    <img src="/public/icon-moon.svg" alt="" />
                ) :
                (
                    <img src="/public/icon-sun.svg" alt="" />
                )
            }

        </div>
    )


}

export default ThemeSwitch
