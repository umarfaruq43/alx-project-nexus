import React from "react";
// Update the path below to the actual location of your interfaces file
import { ButtonProps } from "../../interfaces";
import { cn } from "@/lib/utilities";

const Button: React.FC<ButtonProps> = ({
    className,
    label,
    onClick,
    type = "button",
    icon,
    children,
}) => {
    return (
        <button
            className={cn("cursor-pointer", className)}
            type={type}
            onClick={onClick}
        >
            {icon || label} {children}
        </button>
    );
};

export default Button;
