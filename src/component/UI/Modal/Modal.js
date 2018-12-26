import React from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const modal = (props) => {
    return (
        <div>
            <Backdrop show={props.show} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
                <h1>Confirmation Alert</h1>
                <Button onClick={props.onConfirmation}>Confirm</Button>
                <Button onClick={props.closeModal}>Cancel</Button>
            </div>
        </div>
    )
}

export default modal;