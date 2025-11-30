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

export interface PropertyProps {
    id: string;
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
    description: string;
    amenities: string[];
}
