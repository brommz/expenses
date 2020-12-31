import React, { Component } from 'react';
import Select, { components } from 'react-select'

export default class ExpenseCategory extends Component {
    constructor(componentProps) {
        super(componentProps);

        const { Option } = components
        this.customSelectOption = props => (
            <Option {...props}>
                <i className="material-icons" aria-hidden="true">
                    {props.data.icon || 'attach_money'}
                </i>

                {props.data.label} ({props.data.topic})
            </Option>
        );

        this.customSelectValue = props => (
            <div>
                <i className="material-icons" aria-hidden="true">
                    {props.data.icon || 'attach_money'}
                </i>

                {props.data.label} ({props.data.topic})
            </div>
        );


    }
    render() {
        return (
            <Select
                value={this.props.value}
                onChange={this.props.onChange}
                options={this.props.options}
                components={{ Option: this.customSelectOption, SingleValue: this.customSelectValue }}
                filterOption={this.customFilter}
            />
        );
    }

    customFilter(option, searchText) {
        return option.data.value.toLowerCase().includes(searchText.toLowerCase()) || option.data.topic.toLowerCase().includes(searchText.toLowerCase());
    }
}
