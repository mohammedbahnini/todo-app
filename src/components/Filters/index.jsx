import React, { useContext } from 'react'
import FilterItem from './FilterItem'
import { AppContext } from '../../contexts/AppContext';
import classNames from 'classnames';

function Filters(props) {

    const { state: { theme , tasks , filters }   } = useContext(AppContext);

    return (
        <div className={classNames('flex items-center justify-center rounded-[5px]  ', props.className, {
            'bg-white  shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)]': theme === 'light',
            'bg-very-dark-grayish-violet': theme === 'dark'
        })}>
            <div className='flex gap-x-5'>
                {
                    filters.map( (filter , index) => (
                        <FilterItem key={index}>{filter}</FilterItem>
                    ))
                }

            </div>
        </div>
    )
}

export default Filters
