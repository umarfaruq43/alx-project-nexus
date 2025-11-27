import React from "react";
// Update the path below to the actual location of your interfaces file
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
    className,
    label,
    onClick,
    type = "button",
    icon,
}) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            {icon ? icon : label}
        </button>
    );
};

export default Button;
