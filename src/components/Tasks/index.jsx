import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import TasksListFooter from './TasksListFooter'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';

function TasksList() {
    const { state:{ theme } } = useContext(AppContext);
    console.log(theme);

    return (
        <div>
            <div className={classNames('bg-white  rounded-[5px] text-xs mt-4 divide-y-[1px] ' , {
                'bg-very-dark-grayish-violet divide-pale-gray/10  ' : theme === 'dark' , 
                'bg-white' : theme === 'light' , 
                'shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ' : theme === 'light'
                
            })}>
              <TaskItem isFinished={true} />
              <TaskItem isFinished={false}  />
              <TaskItem isFinished={false}  />
              <TaskItem isFinished={false}  />
              <TaskItem isFinished={false}  />
              <TasksListFooter />
            </div>
        </div>
    )
}

export default TasksList
