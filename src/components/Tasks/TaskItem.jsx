import classNames from 'classnames';
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext';
import { Reorder } from 'framer-motion';
import TaskGradientCircle from './TaskGradientCircle';

function TaskItem(props) {
    const { state: { theme }, dispatch } = useContext(AppContext);
    const { task } = props;
    const { isFinished } = task;


    const textStyle = classNames('flex-1 cursor-pointer md:text-lg', {
        'text-light-gray line-through': isFinished,
        'opacity-20': theme === 'dark' && isFinished,
        'text-light-gray ': theme === 'dark',
        'text-pale-gray': theme === ''
    });

    const taskWrapperStyle = classNames('outline-[1px] outline -outline-offset-2 aspect-square w-5 rounded-full flex items-center justify-center relative md:w-6 ', {
        'outline-light-gray/20 ': theme === 'dark',
        'outline-light-gray ': theme === 'light'
    });

    const handleChangeState = (id) => {
        dispatch({
            type: 'CHANGE_TASK_STATE',
            id
        });
    }

    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE_TASK',
            id
        })
    }




    return (
        <Reorder.Item value={task} id={task.id} as='div'>

            <div className='px-5 py-4 md:py-6'>
                <div className='flex items-center gap-x-3 text-dark-blue  md:gap-x-6'>
                    <div className={taskWrapperStyle} >

                        {isFinished && <TaskGradientCircle />}

                    </div>
                    <p className={textStyle} onClick={(e) => handleChangeState(task.id)} >{task.text}</p>
                    
                    <div className='w-3 aspect-square cursor-pointer ' onClick={(e) => handleRemove(task.id)}>
                        <img src="/icon-cross.svg" alt="" />
                    </div>
                </div>

            </div>
        </Reorder.Item>
    )
}

export default TaskItem
