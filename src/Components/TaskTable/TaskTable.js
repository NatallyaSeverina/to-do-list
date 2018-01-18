import React, { Component } from 'react';
import './TaskTable.css';
import TaskRow from'./TaskRow.js';
import RowHeadTable from'./RowHeadTable.js';
import PropTypes from 'prop-types';



class TaskTable extends Component {
    render() {
        var rows = [];
        this.props.tasks.forEach((task) => {
            rows.push(<TaskRow task={task} />);
        });
        return (
            <table className="taskTable">
                <RowHeadTable />
                <tbody>
                    {rows}
                </tbody>
            </table>
        )

    }
}
TaskTable.propTypes = {
    tasks: PropTypes.array
};
export default TaskTable;