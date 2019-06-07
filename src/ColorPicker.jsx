import React from 'react'
import ColorPalette from './ColorPalette'
import Input from './Input'
import style from './style.scss'

class ColorPicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isPaletteVisible: false
        }
        
        this.toggleContainer = React.createRef()
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
        this.onColorChangeHandler = this.onColorChangeHandler.bind(this)
        this.showPalette = this.showPalette.bind(this)
        this.hidePalette = this.hidePalette.bind(this)
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler)
    }

    onClickOutsideHandler(event) {
        if (!this.toggleContainer || !this.toggleContainer.current) {
            return;
        }

        if (this.state.isPaletteVisible && !this.toggleContainer.current.contains(event.target)) {
            this.hidePalette()
        }
    }

    onColorChangeHandler(color) {
        this.props.onChange(color)
        this.hidePalette()
    }

    showPalette() {
        this.setState({
            isPaletteVisible: true
        })
    }
    
    hidePalette() {
        this.setState({
            isPaletteVisible: false
        })
    }

    render() {
        return (
            <div ref={this.toggleContainer} className={style.colorPicker}>
                <Input value={this.props.value} onChange={this.onColorChangeHandler} onClick={this.showPalette}/>
                {this.renderColorPalette()}
            </div>
        )
    }

    renderColorPalette() {
        if (this.state.isPaletteVisible) {
            return <ColorPalette onSelectColor={this.onColorChangeHandler} />
        }
        return null
    }
}

export default ColorPicker