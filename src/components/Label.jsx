import React from 'react';
import './Label.css'


//coverts rgb color values to base10 integers
function pickTextColorBasedOnBgColorAdvanced(color) {
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map((col) => {
        if (col <= 0.03928) {
            return col / 12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4);            //does math to determine luminance. depending on luminance, text either black or white
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? '#000' : '#fff'
}

export default function Label(props) {
    const { name, color } = props.label;
    return (
        <a className="labels" href={`https://api.github.com/repos/facebook/create-react-app/labels/issue:%20${name}%20`}
            style={{ backgroundColor:`#${color}`, color:pickTextColorBasedOnBgColorAdvanced(color) }}>{name}</a>
    )

}