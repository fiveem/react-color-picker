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
        return (
            <ColorPicker value={this.state.value} name={this.state.name} onChange={this.onChange} />
        )
    }
}