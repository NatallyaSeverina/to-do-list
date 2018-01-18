import React, { Component } from 'react';
import './AddTaskForm.css';
import PropTypes from 'prop-types';

class PrioritySelect extends Component {
    render() {
      return (
        <select required> name={this.props.name}
          <option value=""
            hidden
          >Priority</option>
          <option value="1">Low</option>
          <option value="2">Normal</option>
          <option value="3">High</option>
        </select>
      )
    }
  }
  PrioritySelect.propTypes = {
     name: PropTypes.string
  };
  export default PrioritySelect;