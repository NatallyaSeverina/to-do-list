import React, { Component } from 'react';
import './TaskTable.css';
import PropTypes from 'prop-types';



class TaskRow extends Component {
    render() {
        return (
            <tr>
                <td><input type="checkbox" checked={this.props.task.complited} /></td>
                <td>{this.props.task.title}</td>
                <td>{this.props.task.priority}</td>
                <td>{this.props.task.date}</td>
            </tr>
        );
    }
}
TaskRow.propTypes = {
    task: PropTypes.object
};
export default TaskRow;