import React from 'react'
import style from './style.scss'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this)
    }

    onInputChangeHandler(event) {
        if(!event || !event.target) {
            return
        }
        
        this.props.onChange(event.target.value)
    }

    render() {
        const background = this.props.value
        const { value, onClick } = this.props

        return (
            <div className={style.selectedColor}>
                <input onChange={this.onInputChangeHandler} value={value} className={style.selectedColorValue} spellCheck="false" />
                <div style={{ background }} onClick={onClick} className={style.selectedColorIcon} />
            </div>
        )
    }
}
export default Input