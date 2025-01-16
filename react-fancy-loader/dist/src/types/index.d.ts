import { LucideIcon } from 'lucide-react';
export interface Step {
    text: string;
    Icon: LucideIcon;
    color: string;
}
export interface Theme {
    background: string;
    text: string;
    secondaryBackground: string;
    progressBackground: string;
    progressBar: string;
}
export interface FancyLoaderProps {
    steps?: Step[];
    onComplete?: () => void;
    className?: string;
    progressInterval?: number;
    stepInterval?: number;
    progressIncrement?: number;
    theme?: Theme;
}
