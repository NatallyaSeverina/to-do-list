import React, { Component } from 'react';
import './TaskTable.css';
import HeaderColumnSort from './HeaderColumnSort';
import PropTypes from 'prop-types';


class RowHeadTable extends Component {
  render() {
    return (
      <tr>
        <HeaderColumnSort columnName="Done" />
        <HeaderColumnSort columnName="Title" />
        <HeaderColumnSort columnName="Priority" />
        <HeaderColumnSort columnName="Date" />
      </tr>
    )
  }
}
export default RowHeadTable;