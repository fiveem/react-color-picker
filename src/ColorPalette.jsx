import React from 'react'
import COLORS from './Colors'
import style from './style.scss'

class ColorPalette extends React.Component {
    onColorSelected(color) {
        this.props.onSelectColor(color)
    }

    render() {
        const colorList = this.props.colors || COLORS

        return (
            <div className={style.colorsList}>
                {colorList.map(color => {
                    return <div style={{ background: color }} onClick={this.onColorSelected.bind(this, color)} key={color} className={style.color}></div>
                })}
            </div>
        )
    }
}

export default ColorPalette