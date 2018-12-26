import React from 'react';

import Task from './Task/Task';


const tasks = (props) => {
    const tasks = <ul>
        {props.tasks.map((task, index) => <li  key={task.id}><Task deleteHandler={(event) => props.deleteHandler(index)} task={task} statusCompleteHandler={(event) => props.statusCompleteHandler(index)}/></li>)}
    </ul>
    return (
        <div>
            {tasks}
        </div>
    )
}

export default tasks;