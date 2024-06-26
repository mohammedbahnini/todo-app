import React, { useContext } from 'react'
import Filters from '../Filters'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';

function TasksListFooter() {
    const { dispatch, state } = useContext(AppContext);
    const { theme , filteredTasks } = state;
    const itemsLeft = filteredTasks.reduce( (total, task) => total += task.isFinished ? 0 : 1, 0);
    const clearComletedStyle  = classNames({
        'hover:text-white': theme === 'dark',
        'hover:text-dark-blue': theme === 'light'
    });

    const handleRemoveAll = (e) => {
        dispatch({
            type: 'REMOVE_ALL_FINISHED'
        })
    }

    return (
        <div className='px-5 flex justify-between py-5 text-dark-gray text-xs md:text-base '>
            <p>{itemsLeft} items left</p>
            <Filters className='hidden md:block py-0' />
            <button
                className={clearComletedStyle}
                onClick={handleRemoveAll}>
                Clear Completed
            </button>
        </div>
    )
}

export default TasksListFooter
