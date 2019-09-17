import React from 'react'
import ColorPicker from '../src'

export default class ColorPickerDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "color",
            value: "red"
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(payload) {
        this.setState({
            name: payload.name,
            value: payload.value
        })
    }

    render() {
        const COLORS = [
            '#1abc9c',
            '#16a085',
            '#2ecc71',
            '#27ae60',
            '#4caf50',
            '#8bc34a',
            '#cddc39',
            '#3498db',
            '#2980b9',
            '#34495e',
            '#2c3e50',
            '#2196f3',
            '#03a9f4',
            '#00bcd4',
            '#009688',
            '#e74c3c',
            '#c0392b',
            '#f44336',
            '#e67e22'
        ]

        return (
            <ColorPicker value={this.state.value} name={this.state.name} onChange={this.onChange} colors={COLORS}/>
        )
    }
}