import React from 'react'
import COLORS from './Colors'

class ColorPalette extends React.Component {
    onColorSelected(color) {
        this.props.onSelectColor(color)
    }

    render() {
        return (
            <div className="colorsList">
                {COLORS.map(color => {
                    const style = {
                        background: color
                    }

                    return <div style={style} onClick={this.onColorSelected.bind(this, color)} key={color} className="color"></div>
                })}
            </div>
        )
    }
}

export default ColorPalette