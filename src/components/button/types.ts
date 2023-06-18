export interface ButtonProps {
    children?: string | JSX.Element | JSX.Element[]
    size?: "small" | "medium" | "large";
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    [key: string]: any; 
}