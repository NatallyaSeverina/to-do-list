import React, { Component } from 'react';
import './TaskTable.css';
import TaskRow from './TaskRow.js';
import RowHeadTable from './RowHeadTable.js';
import PropTypes from 'prop-types';



class TaskTable extends Component {
    render() {
        const {
            tasks = [],
            updateTask,
            removeTask
        } = this.props;
        return (
            <table className="taskTable">
                <RowHeadTable />
                <tbody>
                    {tasks.map((task) =>
                        <TaskRow key={task.id} task={task} removeTask={removeTask} updateTask={updateTask} />)}
                </tbody>
            </table>
        )

    }
}
TaskTable.propTypes = {
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
};
export default TaskTable;