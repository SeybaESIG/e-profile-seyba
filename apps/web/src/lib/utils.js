import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind class names; later utilities win on conflicts (shadcn pattern). */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}