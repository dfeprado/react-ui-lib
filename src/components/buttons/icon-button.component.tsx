import { ButtonProps, raisedClasses } from "./buttons.definitions";

import './style.scss';

export default function IconButton(props: ButtonProps) {
    const classes = 
        `button icon 
        ${props.raised ? raisedClasses : ''} 
        ${props.effect} 
        ${props.className}`
    
    return (
        <button className={classes}>
            {props.children}
        </button>
    );
}