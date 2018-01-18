import React, { Component } from 'react';
import './DateSelect.css';
import PropTypes from 'prop-types';


class DateSelect extends Component {
  render() {
    return (
      <input type="date" name={this.props.name} data-placeholder={this.props.title} />
    )
  }
}
DateSelect.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
};
export default DateSelect;