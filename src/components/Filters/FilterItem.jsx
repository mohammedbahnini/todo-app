import classNames from 'classnames'
import React, { useState } from 'react'

function FilterItem(props) {
    const [ isActive  , setIsActive] =useState(false);
    const handleClick = (e)=>{
        setIsActive( prev => !prev )
    }

    const btn = classNames('font-bold text-base  ' , { 
        'text-light-blue' : isActive ,
        'text-dark-gray' : !isActive
    })
    return (
        <button className={btn} onClick={handleClick}>{props.children}</button>
    )
}

export default FilterItem
