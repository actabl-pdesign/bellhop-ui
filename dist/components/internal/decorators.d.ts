import { ReactElement } from 'react';
import { StoryContext, StoryFn } from '@storybook/nextjs';
export declare type ImageSrc = {
    height: number;
    url: string;
    width: number;
};
export declare type Globals = {
    overlay: {
        active: boolean;
        visible: boolean;
        isDiffOn: boolean;
        image?: ImageSrc;
        opacity: number;
        isComparisonOn: boolean;
        threshold: number;
        viewport: Viewports;
    };
};
export type Viewports = "desktop" | "mobile";
type CustomRenderer = (Story: StoryFn, context: StoryContext) => ReactElement;
export declare const withOverlayAware: (customRenderer?: CustomRenderer) => (Story: StoryFn, context: StoryContext) => import("react").JSX.Element;
export {};
