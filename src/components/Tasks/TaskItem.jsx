import classNames from 'classnames';
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext';

function TaskItem(props) {
    const { state:{ theme }} = useContext(AppContext);

    const { isFinished } = props;
    const textStyle = classNames('flex-1 cursor-pointer',{
        'text-light-gray line-through' : isFinished , 
        'opacity-20' : theme === 'dark' && isFinished ,
        'text-light-gray ' : theme === 'dark' , 
        'text-pale-gray' : theme === ''
    })
    return (
        <div className='px-5 py-4'>

            <div className='flex items-center gap-x-3 text-dark-blue'>

                <div className='outline-[1px] outline outline-light-gray -outline-offset-2 aspect-square w-5 rounded-full flex items-center justify-center relative ' >
                    { isFinished && (<div className='absolute w-full h-full  rounded-full' style={{ background: 'linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)' }}></div>)}
                    <img src="/public/icon-check.svg" alt="" className='w-2 relative z-10' />
                </div>
                <p className={textStyle} >Complete online JavaScript course</p>
                <div className='w-3 aspect-square cursor-pointer'>
                    <img src="/public/icon-cross.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default TaskItem
