import React from 'react'

function TasksListFooter() {
    return (
        <div className='px-5 flex justify-between py-5 text-dark-gray text-xs   '>
            <p>5 items left</p>
            <button>Clear Completed</button>
        </div>
    )
}

export default TasksListFooter
