import React, { useContext } from 'react'
import Filters from '../Filters'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';

function TasksListFooter() {
    const { dispatch , state } = useContext(AppContext);
    const { theme }= state ;

    const handleRemoveAll = (e)=>{
        dispatch({
            type : 'REMOVE_ALL_FINISHED'
        })
    }
    
    return (
        <div className='px-5 flex justify-between py-5 text-dark-gray text-xs md:text-base    '>
            <p>5 items left</p>
            <div >
                <Filters className='hidden md:block py-0' />
            </div>
            <button className={classNames({
                'hover:text-white' : theme === 'dark'  , 
                'hover:text-dark-blue' : theme === 'light'
            })} onClick={handleRemoveAll}>Clear Completed</button>
        </div>
    )
}

export default TasksListFooter
