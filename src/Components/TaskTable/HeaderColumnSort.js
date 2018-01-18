import React, { Component } from 'react';
import './TaskTable.css';
import PropTypes from 'prop-types';


class HeaderColumnSort extends Component {
    render() {
      return (
        <th>
          <label>{this.props.columnName}</label>
          <div className="sortUp"></div>
          <div className="sortDown"></div>
        </th>
      )
    }
  }
HeaderColumnSort.propTypes = {
  columnName: PropTypes.string
};
export default HeaderColumnSort;