import classNames from 'classnames';
import React, { useContext } from 'react'
import withState from '../../utilities/withStateComponent';
import { AppContext } from '../../contexts/AppContext';

function Input() {
    const { state }= useContext(AppContext)
    const { theme } = state;
    
    const divStyle = classNames('bg-white rounded-[5px] py-[18px] px-5 mt-10',
    {
        'bg-very-dark-grayish-violet': theme === 'dark' , 
        'bg-white' : theme === 'light'
    });
    const circleStyle = classNames('aspect-square w-5 border-[1px] border-light-gray rounded-full ' , {
        'opacity-20' : theme === 'dark'
    });
    const inputStyle = classNames('border-none outline-none  text-xs bg-transparent ' ,  {
        'text-dark-blue' : theme === 'light' , 
        'text-dark-gray' : theme === 'dark'
    })

    return (
        <div className={divStyle} >
            <div className="flex gap-x-[12px]">
                <div className={circleStyle}>
                </div>
                <input type="text" placeholder='Create a new todo…' className={inputStyle} />

            </div>
        </div>
    )

}

export default Input
