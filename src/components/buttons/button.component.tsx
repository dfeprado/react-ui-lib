import { ButtonProps, raisedClasses } from './buttons.definitions';
import './style.scss';

/**
 * Displays a button. Its content will be displayed
 * on a flex box.
 * @param props Set of `ButtonProps` options
 */
export default function Button(props: ButtonProps) {
    const classes = 
        `button 
        ${props.raised && !props.disabled ? raisedClasses : ''} 
        ${props.effect} 
        ${props.className}`;

    return (
        <button className={classes}
            disabled={props.disabled}>
            {props.children}
        </button>
    );
}