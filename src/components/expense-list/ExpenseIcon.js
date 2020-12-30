import React, { Component } from 'react';

export default class ExpenseIcon extends Component {
  render() {
    return (
      <span
        className={`mdc-list-item__start-detail ${this.props.icon}`}
        role="presentation"
      >
        <i className="material-icons" aria-hidden="true">
          {this.props.icon || 'attach_money'}
        </i>
      </span>
    );
  }
}
