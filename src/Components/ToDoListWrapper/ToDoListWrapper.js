import React, { Component } from 'react';
import './ToDoListWrapper.css';
import { AddTaskForm } from '../AddTaskForm';
import FilterForm from '../FilterForm/FilterForm';
import TaskTable from '../TaskTable/TaskTable';
import PropTypes from 'prop-types';

import { getTasks } from '../../utils/apiWrapper';

class ToDoListWrapper extends Component {
  state = {
    tasks: []
  }
  componentWillMount() {
    getTasks().then((tasks) => this.setState({ tasks }));
  }

  // this.addTask = this.addTask.bind(this)
  addTask = (taskData) => {
    console.log(taskData);
  }

  render() {
    return (
      <div className="toDoListWrapper">
        <AddTaskForm title="Add task" onSubmit={this.addTask} />
        <FilterForm title="Filter" />
        <TaskTable tasks={this.state.tasks} />
      </div>
    );
  }
}

export default ToDoListWrapper;