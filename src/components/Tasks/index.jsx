import React, { useContext, useState } from 'react'
import TaskItem from './TaskItem'
import TasksListFooter from './TasksListFooter'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';
import { Reorder } from 'framer-motion';
import NoTasksFound from './NoTasksFound';

function TasksList() {
    
    const { state: { theme, filteredTasks }, dispatch } = useContext(AppContext);


    const textStyle = classNames('flex-1 cursor-pointer md:text-lg', {
        'text-light-gray ': theme === 'dark',
        'text-dark-blue': theme === 'light'
    });

    const tasksWrapperStyle = classNames('rounded-[5px] text-xs mt-4 divide-y-[1px] ', {
        'bg-very-dark-grayish-violet divide-pale-gray/10  ': theme === 'dark',
        'bg-white': theme === 'light',
        'shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ': theme === 'light'
    });

    const handleReorder = (newFiltredTasks) => {
        dispatch({
            type: 'CHANGE_ORDER',
            newFiltredTasks
        })
    }


    return (


        <>
            <Reorder.Group axis='y' values={filteredTasks} as='div' onReorder={handleReorder}>

                <div className={tasksWrapperStyle} >
                    {
                        filteredTasks.length > 0 ?
                            filteredTasks.map((task) => <TaskItem key={task.id} task={task} /> ) 
                            :
                            <NoTasksFound/>

                    }
                    <TasksListFooter />
                </div>

            </Reorder.Group>
        </>

    )
}

export default TasksList
