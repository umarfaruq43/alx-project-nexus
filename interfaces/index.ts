// Placeholder for Button component props
export interface ButtonProps {
    label?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export interface CustomSliderProps {
    children: React.ReactNode;
    autoScroll?: boolean;
    delay?: number;
}

export interface InputProps {
    name: string;
    type: string;
    placeholder: string;
}

export interface SidebarProps {
    closeMobileMenu: () => void;
}

export interface Movie {
    id: number;
    title: string;
    year: string;
    genre: string;
    poster_path: string | null;
    backdrop_path?: string | null;
    overview?: string;
    vote_average?: number;
    runtime?: number;
}
