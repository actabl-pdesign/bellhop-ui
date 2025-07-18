import { HTMLAttributes, SVGProps } from 'react';
export declare const getStarProgress: (starPosition: number, rating: number, maxRating?: number) => number;
interface StarIconProps extends SVGProps<SVGSVGElement> {
    /**
     * The progress of the star icon. It should be a number between 0 and 100.
     *
     * @default 100
     */
    progress?: number;
}
export declare const StarIcon: ({ progress, ...props }: StarIconProps) => import("react").JSX.Element;
interface RatingStarsProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The rating to display.
     *
     * @default 5
     */
    rating?: number;
    /**
     * The number of stars to display.
     */
    stars?: number;
    /**
     * The class name of the star icon.
     */
    starClassName?: string;
}
export declare const RatingStars: ({ rating, stars, starClassName, ...props }: RatingStarsProps) => import("react").JSX.Element;
export {};
