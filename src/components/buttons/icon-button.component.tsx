import Button from "./button.component";
import { ButtonProps } from "./buttons.definitions";

import './style.scss';

export default function IconButton(props: ButtonProps) {
    const _props = {...props};
    _props.className = `icon ${props.className}`;
    return <Button {..._props}></Button>
}