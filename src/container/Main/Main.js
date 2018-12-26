import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Main.css';

import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';
import Tasks from '../../component/Tasks/Tasks';

class Main extends React.Component {
    state = {
        task: '',
        tasks: [],
        total: 0,
        active: 0,
        completed: 0,
    }

    changeHandler = (event) => {
        // const taskArray = event.target.value.split('');
        // const first = taskArray[0].toUpperCase();
        // taskArray.shift(0);
        // taskArray.unshift(first);
        // const task =  taskArray.join('');
        let task = event.target.value;
        this.setState({ task });
    }

    clickHandler = () => {
        if (this.state.task !== '') {
            const tasks = [...this.state.tasks, { id: Math.random(), value: this.state.task.charAt(0).toUpperCase() + this.state.task.slice(1), completed: false }];
            this.setState(prevState => { return { tasks, task: '', total: prevState.total + 1, active: prevState.active + 1 } });
        }
    }

    deleteHandler = (index) => {
        const updatedtasks = [...this.state.tasks];
        let completedTasks = this.state.completed;
        let totalTasks = this.state.total;
        let activeTasks = this.state.active;
        updatedtasks[index].completed == true ? completedTasks-- : activeTasks--;
        totalTasks--;
        updatedtasks.splice(index, 1);
        this.setState({ tasks: updatedtasks, total: totalTasks, completed: completedTasks, active: activeTasks });
    }

    statusCompleteHandler = (index) => {
        const task = { ...this.state.tasks[index] };
        task.completed = !this.state.tasks[index].completed;
        console.log(task);
        let updatedtasks = [...this.state.tasks];
        updatedtasks = updatedtasks.map(tsk => {
            tsk.completed = tsk.id == task.id ? task.completed : tsk.completed;
            return tsk;
        })
        console.log(updatedtasks);
        const completed = updatedtasks.filter(task => task.completed ? task : null).length;
        const active = this.state.total - completed;
        this.setState({ tasks: updatedtasks, active, completed });
    }


    render() {
        const disabled = this.state.task == '' ? true : false;
        return (
            <div className={classes.Main}>
                <h1>To Do Tasks </h1>
                <hr />
                <h5>Total Tasks : {this.state.total}</h5>
                <h5>Active Tasks : {this.state.active}</h5>
                <h5>Completed Tasks : {this.state.completed}</h5>
                <Input
                    task={this.state.task}
                    changeHandler={this.changeHandler} />
                <Button
                    type='success'
                    onClick={this.clickHandler}
                    disabled={disabled}>ADD</Button>
                <Tasks
                    tasks={this.state.tasks}
                    deleteHandler={this.deleteHandler}
                    statusCompleteHandler={this.statusCompleteHandler}
                />
            </div>
        )
    }
}

export default Main;