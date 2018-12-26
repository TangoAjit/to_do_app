import React from 'react';
import classes from './Button.css';

const button = (props) => {
    let classNames = [classes.dotted,'btn-small'];
    if(props.children === 'Delete'){
        classNames.push(classes.floatLeft) 
    }else if(props.children === 'Completed' || props.children === 'Uncomplete'){
        classNames.push(classes.floatRight);
    }
    classNames.push(classes.thin)
    return <button className={classNames.join(' ')} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
}

export default button;