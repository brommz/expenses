import React, { Component } from "react";
import { MDCTextfield } from "@material/textfield/dist/mdc.textfield.js";
import { MDCDialog } from "@material/dialog/dist/mdc.dialog.js";

import "@material/form-field/dist/mdc.form-field.css";
import "@material/select/dist/mdc.select.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/button/dist/mdc.button.css";
import "@material/dialog/dist/mdc.dialog.css";

import "./ExpenseForm.css";
import ExpenseCategory from "./ExpenseCategory";

class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = { isValid: false };
    }

    handleInputChange = (event) => {
        const target = event.target;
        target.reportValidity();
        this.setState({ isValid: this.form.checkValidity() });
        this.props.onChange(target.name, target.value);
    }

    handleCategoryChange = (event) => {
        const value = event.value;
        if (!value) {
            throw 'Category cannot be empty';
        }
        this.setState({ isValid: this.form.checkValidity() });
        this.props['expense']['category'] = value;
        this.props['expense']['topic'] = 'topic-mock';
        this.props['expense']['icon'] = 'face';
    }

    componentDidMount() {
        document.querySelectorAll(".mdc-textfield").forEach(selector => {
            new MDCTextfield(selector);
        });
        if (this.props.expense.id === undefined) {
            this.amountInput.focus();
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props['expense']['date'] = this.parseDate(this.props['expense']['date']);
        this.props.onSubmit();
    }

    initializeDeleteModal = (element) => {
        if (element) {
            this.dialog = new MDCDialog(element);
            this.dialog.listen("MDCDialog:accept", () => {
                // a fix for not closing the modal dialog properly
                document.body.className = document.body.className.replace(
                    "mdc-dialog-scroll-lock",
                    ""
                );
                this.props.onDelete(this.props.expense);
            });
        }
    }

    parseDate(date) {
        if (!date || date.indexOf('-') !== -1) {
            return date;
        }
        const parts = date.split('/');
        const year = +parts[2] + 2000;
        const month = parts[1].length < 2 ? `0${parts[1]}` : parts[1];
        const day = parts[0].length < 2 ? `0${parts[0]}` : parts[0];
        return `${year}-${month}-${day}`;
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                ref={form => {
                    this.form = form;
                }}
                noValidate
            >
                <aside className="mdc-dialog" ref={this.initializeDeleteModal}>
                    <div className="mdc-dialog__surface">
                        <header className="mdc-dialog__header">
                            <h2 className="mdc-dialog__header__title">
                                Are you sure?
              </h2>
                        </header>
                        <section className="mdc-dialog__body">
                            Do you really want to delete the expense?
            </section>
                        <footer className="mdc-dialog__footer">
                            <button
                                type="button"
                                className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel"
                            >
                                Cancel
              </button>
                            <button
                                type="button"
                                className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept"
                            >
                                Delete
              </button>
                        </footer>
                    </div>
                </aside>
                <div className="mdc-form-field">
                    <div className="mdc-textfield">
                        <input
                            name="amount"
                            className="mdc-textfield__input"
                            ref={el => {
                                this.amountInput = el;
                            }}
                            value={this.props.expense.amount}
                            onChange={this.handleInputChange}
                            type="number"
                            step="0.01"
                            min="0"
                            required
                        />
                        <label className="mdc-textfield__label">Amount</label>
                    </div>
                </div>

                <div className="mdc-form-field">
                    <ExpenseCategory
                        name="category"
                        value={({ value: this.props.expense.category, label: this.props.expense.category, icon: this.props.icons[this.props.expense.category], topic: this.props.topics[this.props.expense.category] })}
                        onChange={this.handleCategoryChange}
                        options={this.props.categories.map(c => ({ value: c, label: c, icon: this.props.icons[c], topic: this.props.topics[c] }))}
                    />
                </div>

                <div className="mdc-form-field">
                    <div className="mdc-textfield">
                        <input
                            name="description"
                            className="mdc-textfield__input"
                            value={this.props.expense.description}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                        <label className="mdc-textfield__label">Description</label>
                    </div>
                </div>

                <div className="mdc-form-field">
                    <div className="mdc-textfield">
                        <input
                            name="date"
                            className="mdc-textfield__input"
                            value={this.parseDate(this.props.expense.date)}
                            onChange={this.handleInputChange}
                            type="date"
                            required
                        />
                        <label className="mdc-textfield__label">Date</label>
                    </div>
                </div>

                <div className="mdc-form-field">
                    <select
                        name="account"
                        className="mdc-select"
                        value={this.props.expense.account}
                        onChange={this.handleInputChange}
                        required
                    >
                        {this.props.accounts.map(account =>
                            <option value={account} key={account}>{account}</option>
                        )}
                    </select>
                </div>

                <div className="mdc-form-field mdc-form-submit">
                    <input
                        type="submit"
                        className="mdc-button"
                        value={this.props.expense.id ? "Update" : "Add"}
                        disabled={!this.state.isValid}
                    />
                    {this.props.expense.id &&
                        <input
                            type="button"
                            className="mdc-button"
                            onClick={() => this.dialog.show()}
                            value="Delete"
                        />}
                    <input
                        type="button"
                        className="mdc-button"
                        onClick={() => this.props.onCancel()}
                        value="Close"
                    />
                </div>
            </form>
        );
    }
}

export default ExpenseForm;
