import React, { Component } from 'react';
import Select, { components } from 'react-select'

export default class ExpenseCategory extends Component {
    constructor(componentProps) {
        super(componentProps);

        const { Option } = components
        this.customSelectOption = p => (
            <Option {...p}>
                <i className="material-icons" aria-hidden="true">
                    {p.data.icon || 'attach_money'}
                </i>

                {p.data.label}
            </Option>
        )

        this.customSelectValue = props => (
            <div>
                <i className="material-icons" aria-hidden="true">
                    {props.data.icon || 'attach_money'}
                </i>
                
                {props.data.label}
            </div>
        )
    }
    render() {
        return (
            <Select
                value={this.props.value}
                onChange={this.props.onChange}
                options={this.props.options}
                components={{ Option: this.customSelectOption, SingleValue: this.customSelectValue }}
            />
        );
    }
}
