import classNames from 'classnames';
import React, { useContext, useRef, useState } from 'react'
import { AppContext } from '../../contexts/AppContext';

function Input() {
    const { state, dispatch } = useContext(AppContext)
    const { theme } = state;
    const [errorMessage, setErrorMessage] = useState('');
    const refInput = useRef(null);

    // defining styles
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
    

    // defining handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        if (refInput.current.value.trim().length == 0) {
            setErrorMessage('Type a task');
            refInput.current.focus();
        }
        else {
            dispatch({
                type: 'ADD_TASKS',
                text: refInput.current.value,
                isFinished: false
            })
            refInput.current.value = '';
            setErrorMessage('');
        }


    }

    return (
        <>
            <div className={divStyle} >
                <div className="flex gap-x-[12px] items-start md:gap-x-6 ">
                    <div className={circleStyle}>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Create a new todo…' className={inputStyle} ref={refInput} />
                    </form>

                </div>


            </div>
            {
                errorMessage &&
                (
                    <div className='mt-2'>
                        <span className='text-red-500'>{errorMessage}</span>
                    </div>
                )
            }
        </>
    )

}

export default Input
