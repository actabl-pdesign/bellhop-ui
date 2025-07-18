import { ComponentPropsWithRef, ReactNode } from 'react';
import { TabListProps as AriaTabListProps, TabProps as AriaTabProps, TabRenderProps as AriaTabRenderProps, TabPanel as AriaTabPanel, Tabs as AriaTabs } from 'react-aria-components';
type Orientation = "horizontal" | "vertical";
type HorizontalTypes = "button-brand" | "underline";
type VerticalTypes = "button-brand" | "line";
type TabTypeColors<T> = T extends "horizontal" ? HorizontalTypes : VerticalTypes;
declare const sizes: {
    sm: {
        "button-brand": string;
        "button-gray": string;
        "button-border": string;
        "button-minimal": string;
        underline: string;
        line: string;
    };
};
interface TabListComponentProps<T extends object, K extends Orientation> extends AriaTabListProps<T> {
    /** The size of the tab list. */
    size?: keyof typeof sizes;
    /** The type of the tab list. */
    type?: TabTypeColors<K>;
    /** The orientation of the tab list. */
    orientation?: K;
    /** The items of the tab list. */
    items: T[];
    /** Whether the tab list is full width. */
    fullwidth?: boolean;
}
export declare const TabList: <T extends Orientation>({ size, type, orientation: orientationProp, fullwidth, className, children, ...otherProps }: TabListComponentProps<TabComponentProps, T>) => import("react").JSX.Element;
export declare const TabPanel: (props: ComponentPropsWithRef<typeof AriaTabPanel>) => import("react").JSX.Element;
interface TabComponentProps extends AriaTabProps {
    /** The label of the tab. */
    label?: ReactNode;
    /** The children of the tab. */
    children?: ReactNode | ((props: AriaTabRenderProps) => ReactNode);
    /** The badge displayed next to the label. */
    badge?: number | string;
}
export declare const Tab: (props: TabComponentProps) => import("react").JSX.Element;
export declare const Tabs: {
    ({ className, ...props }: ComponentPropsWithRef<typeof AriaTabs>): import("react").JSX.Element;
    Panel: (props: ComponentPropsWithRef<typeof AriaTabPanel>) => import("react").JSX.Element;
    List: <T extends Orientation>({ size, type, orientation: orientationProp, fullwidth, className, children, ...otherProps }: TabListComponentProps<TabComponentProps, T>) => import("react").JSX.Element;
    Item: (props: TabComponentProps) => import("react").JSX.Element;
};
export {};
