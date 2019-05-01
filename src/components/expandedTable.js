import React, { Component } from 'react';

class ExposedFunctionTable extends Component {
  handleGetCurrentData = () => {
    console.log(this.node.table.props.data);
  }

  handleGetCurrentData = () => {
    console.log(this.node.table.props.data);
  }

  handleGetSelectedData = () => {
    console.log(this.node.selectionContext.selected);
  }

  handleGetExpandedData = () => {
    console.log(this.node.rowExpandContext.state.expanded);
  }

  handleGetCurrentPage = () => {
    console.log(this.node.paginationContext.currPage);
  }

  handleGetCurrentSizePerPage = () => {
    console.log(this.node.paginationContext.currSizePerPage);
  }

  handleGetCurrentSortColumn = () => {
    console.log(this.node.sortContext.state.sortColumn);
  }

  handleGetCurrentSortOrder = () => {
    console.log(this.node.sortContext.state.sortOrder);
  }

  handleGetCurrentFilter = () => {
    console.log(this.node.filterContext.currFilters);
  }

  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={ this.handleGetCurrentData }>Get Current Display Rows</button>
        <button className="btn btn-default" onClick={ this.handleGetSelectedData }>Get Current Selected Rows</button>
        <button className="btn btn-default" onClick={ this.handleGetExpandedData }>Get Current Expanded Rows</button>
        <button className="btn btn-default" onClick={ this.handleGetCurrentPage }>Get Current Page</button>
        <button className="btn btn-default" onClick={ this.handleGetCurrentSizePerPage }>Get Current Size Per Page</button>
        <button className="btn btn-default" onClick={ this.handleGetCurrentSortColumn }>Get Current Sort Column</button>
        <button className="btn btn-default" onClick={ this.handleGetCurrentSortOrder }>Get Current Sort Order</button>
        <button className="btn btn-default" onClick={ this.handleGetCurrentFilter }>Get Current Filter Information</button>
      </div>
    );
  }
}
export default ExposedFunctionTable;
