import classNames from 'classnames';
import React, { useContext, useRef } from 'react'
import { AppContext } from '../../contexts/AppContext';

function Input() {
    const { state , dispatch  } = useContext(AppContext)
    const { theme } = state;
    console.log(theme);

    const divStyle = classNames('rounded-[5px] py-[18px] px-5 mt-10 md:py-6  ',
        {
            'bg-very-dark-grayish-violet': theme === 'dark',
            'bg-white': theme === 'light'
        });
    const circleStyle = classNames('aspect-square w-5 border-[1px] border-light-gray rounded-full md:w-6 ', {
        'opacity-20': theme === 'dark'
    });
    const inputStyle = classNames('border-none outline-none  text-xs bg-transparent md:text-lg ', {
        'text-dark-blue': theme === 'light',
        'text-light-gray': theme === 'dark'
    });
    const refInput = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if ( refInput.current.value.trim().length>0 )
        {
            dispatch({
                type : 'ADD_TASKS'  , 
                text : refInput.current.value  , 
                isFinished : false
            })
            refInput.current.value = '';
        }
       

    }

    return (
        <div className={divStyle} >
            <div className="flex gap-x-[12px] items-start md:gap-x-6 ">
                <div className={circleStyle}>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Create a new todo…' className={inputStyle} ref={refInput} />
                </form>

            </div>
        </div>
    )

}

export default Input
