import React, { Component } from 'react';
import './ToDoListWrapper.css';
import AddTaskForm from'../AddTaskForm/AddTaskForm.js';
import FilterForm from'../FilterForm/FilterForm.js';
import TaskTable from'../TaskTable/TaskTable.js';
import PropTypes from 'prop-types';
var Tasks = [
    { complited: true, title: 'Create To do app', priority: 'Normal', date: '2018-01-01' },
    { complited: false, title: 'Visit lesson', priority: 'Low', date: '2018-05-01' },
    { complited: false, title: 'Have a rest', priority: 'Normal', date: '2018-01-01' },
    { complited: true, title: 'Play with kids', priority: 'Normal', date: '2018-06-01' },
  ];
  class ToDoListWrapper extends Component {
    render() {
      return (
        <div className="toDoListWrapper">
          <AddTaskForm title="Add task" />
          <FilterForm title="Filter" />
          <TaskTable tasks={Tasks} />
        </div>
      );
    }
  }
  
  export default ToDoListWrapper;