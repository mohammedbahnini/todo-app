import React, { useContext } from 'react'
import FilterItem from './FilterItem'
import { AppContext } from '../../contexts/AppContext';

function Filters() {

    const context = useContext(AppContext);
 return (
        <div className='flex items-center justify-center bg-white mt-4 rounded-[5px] pt-4 pb-5 shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)]'>
            <div className='flex gap-x-5'>
                <FilterItem>All</FilterItem>
                <FilterItem>Active</FilterItem>
                <FilterItem>Completed</FilterItem>
            </div>
        </div>
    )
}

export default Filters
