import React from 'react'
import { Color } from '../model/color'

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

interface PropsColorSlider {
    value: number;
    onValueUpdated: (newValue: number) => void;
}

const updateColor = (props: Props, colorId: keyof Color) => 
    (value: any) => {
        props.onColorUpdated({
            ...props.color,
            [colorId]: value
        })
}

const ColorPicker:React.FC<Props> = (props) => {

    return (
        <div>
            <ColorSliderComponent value={props.color.red} onValueUpdated={updateColor(props, "red")}/>
            <ColorSliderComponent value={props.color.green} onValueUpdated={updateColor(props, "green")}/>
            <ColorSliderComponent value={props.color.blue} onValueUpdated={updateColor(props, "blue")}/>
        </div>
    )
}

const ColorSliderComponent:React.FC<PropsColorSlider> = (props) => {
    return (
        <div>
            <input 
                type="range" 
                min="0"
                max="255"
                value={props.value}
                onChange={(event) => props.onValueUpdated(+event.target.value)}
            />
            {props.value}
        </div>
    )
}

export default ColorPicker