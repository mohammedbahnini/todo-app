import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext';

function FilterItem(props) {
    const { state , dispatch } = useContext(AppContext);
    const { theme }= state;
    const { children } = props;
    const  isActive  = state.activeFilter === children;


    const handleClick = (e)=>{
        dispatch({
            type : 'FILTER_TASKS' ,
            filter : children
        })
    }

    const btn = classNames('font-bold text-base capitalize   ' , { 
        'text-light-blue' : isActive ,
        'text-dark-gray ' : !isActive  , 
        'hover:text-white ' : theme === 'dark' && !isActive, 
        'hover:text-dark-blue ' : theme === 'light' && !isActive
    })
    return (
        <button className={btn} onClick={handleClick}>{children}</button>
    )
}

export default FilterItem
