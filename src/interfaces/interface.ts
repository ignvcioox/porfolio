import { ReactElement, ReactNode } from "react";

// Interface data/projects.ts

export interface ProjectProps {
    title: string;
    description: string;
    technologies: ReactElement[];
    background: string;
    github?: string;
    website?: string;
};

// Interface components/ui/Icon.tsx

export interface IconProps {
    href?: string;
    ariaLabel: string;
    children: ReactElement;
    className?: string;
    onClick?: () => void;
    disableStyleHover?: boolean;
};

// Interface data/data.ts

export interface NavigationProps {
    id: string;
    title: string;
};

export interface ExperienceProps {
    title: string;
    company: string;
    icon: string;
    iconBg: string;
    date: string;
    description: string[];
};


// Interface components/ui/Card.tsx

export interface CardProps {
    children: ReactNode;
    title: string;
    description: string;
};

// Interface components/ui/Background.tsx

export interface StarProps {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
};

export interface MeteorProps {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    animationDuration: number;
};

