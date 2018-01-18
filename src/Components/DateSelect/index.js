import React, { Component } from 'react';
import './DateSelect.css';
import PropTypes from 'prop-types';
DateSelect.propTypes = {
  title: PropTypes.string
};

class DateSelect extends Component {
  render() {
    return (
      <span>
        <label>{this.props.title}</label>
        <input type="date" placeholder={this.props.title} defaultValue={new Date().toISOString()}></input>
      </span>
    )
  }
}
export default DateSelect;