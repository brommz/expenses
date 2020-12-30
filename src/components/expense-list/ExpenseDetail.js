import React, { Component } from "react";
import ExpenseIcon from "./ExpenseIcon";

export default class ExpenseDetail extends Component {

  render() {
    return (
      <li
        className="mdc-list-item"
        onClick={() => this.props.onSelect(this.props.expense)}
      >
        <ExpenseIcon icon={this.props.expense.icon} />
        <span className="mdc-list-item__text">
          {this.props.expense.category} ({this.props.expense.topic})
          <span className="mdc-list-item__text__secondary">
            {this.props.expense.date}
            {this.props.expense.description
              ? ` ${this.props.expense.description.replace(/^(.{14}).+/, "$1…")}`
              : ""}
          </span>
        </span>
        <span className="mdc-list-item__end-detail">
          ${this.props.expense.amount}
        </span>
      </li>
    );
  }
}
