export const raisedClasses = 'shadow-md shadow-zinc-400';

export interface ButtonProps {
    /** 
     * Class list you want to set to the button.
     * You'd like to set the button's background and text colors.
     */
    className?: string;
    /**
     * Which hover and active effects should be applied
     *  - darken: darken the background color on hover
     *  - ligthen: lighten the background color on hover
     */
    effect?: 'darken' | 'lighten';
    /**
     * Whether the button is raised or not. If it is,
     * then a shadow is put on it.
     */
    raised?: boolean;
    /**
     * Buttons content
     */
    children?: React.ReactNode;
}