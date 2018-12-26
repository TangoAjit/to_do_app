import React from 'react';
import classes from './Input.css';

const input = (props) => {
    return <div className={classes.Input}>
        <div className="row ">
            <div className='center-align '>
                <div className="input-field col s12 l4 m8 offset-l4 offset-m2 ">
                    <input style={{color: 'rgb(226, 219, 216)', fontSize:'30px'}} id='taskInp' placeholder="What's your task?" type="text" onChange={props.changeHandler} value={props.task} />
                </div>
            </div>
        </div>
    </div>
}

export default input;