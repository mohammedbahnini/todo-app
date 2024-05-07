import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';

function AppWrapper({children}) {
    const { state } = useContext(AppContext);
    const { theme } = state;
    const style = classNames('relative z-0' ,{
        'bg-pale-gray' : theme === 'light' , 
        'bg-very-dark-blue' : theme === 'dark' , 

    });

    return (
        <div className={style + ''}>
            {children}
        </div>
    )
}

export default AppWrapper
