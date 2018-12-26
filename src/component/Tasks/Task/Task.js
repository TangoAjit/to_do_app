import React from 'react';
import classes from './Task.css';

import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

class task extends React.Component {

    state = {
        showModal: false,
    }

    showModalHandler = () => {
        this.setState({ showModal: true })
    }

    closeModalHandler = () => {
        this.setState({ showModal: false })
    }

    render() {
        const modal = <Modal onConfirmation={this.props.deleteHandler} show={this.state.showModal} closeModal={this.closeModalHandler} />;
        let textStyle = {
            fontSize: '30px',
            color: 'rgb(226, 219, 216)',
        }
        textStyle = this.props.task.completed ? {...textStyle, textDecoration: 'line-through', textDecorationColor: 'red' } : {...textStyle};
        return (
            <div>
                {modal}
                <div className={classes.Task}>
                    <div class="row">
                        <div class="col s12 m12">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <p><span style={textStyle} contentEditable={true}>{this.props.task.value}</span></p>
                                </div>
                                <div class="card-action" style={{overflow:'hidden'}}>
                                    <Button onClick={this.showModalHandler}>Delete</Button>
                                    <Button onClick={this.props.statusCompleteHandler}>{!this.props.task.completed ? 'Completed' : 'Uncomplete'}</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={classes.Task}>
                <span style={textStyle} contentEditable={true}>{this.props.task.value}</span>
                <Button onClick={this.showModalHandler}>Delete</Button>
                <Button onClick={this.props.statusCompleteHandler}>{!this.props.task.completed ? 'Completed' : 'Uncomplete'}</Button>
        </div>*/}
            </div >)
    }
}

export default task;