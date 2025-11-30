import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

export const cn = (...values: ClassValue[]) => {
    return twMerge(clsx(values));
};
