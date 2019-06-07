import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    }

    onInputChangeHandler(event) {
        if(!event || !event.target || !event.target.value) {
            return;
        }
        
        this.props.onChange(event.target.value)
    }

    render() {
        const style = {
            background: this.props.value
        }
        const { value, onClick } = this.props;

        return (
            <div className="selectedColor">
                <input onChange={this.onInputChangeHandler} value={value} className="selectedColorValue" spellCheck="false" />
                <div style={style} onClick={onClick} className="selectedColorIcon" />
            </div>
        )
    }
}
export default Input