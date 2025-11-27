import ReviewSection from "@/components/property/ReviewSection";

// Placeholder for Card component props
export interface CardProps {
    image: string;
    title: string;
    price: number;
    rating: number;
    address: {
        state: string;
        city: string;
        country: string;
    };
}

// Placeholder for Button component props
export interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    icon?: React.ReactNode;
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

export interface ReviewProps {
    avatar: string;
    comment: string;
    name: string;
    rating: number;
    id: string;
}

export interface PillProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export interface categoriesProps {
    src: string;
    alt: string;
    label: string;
    height?: number;
}
